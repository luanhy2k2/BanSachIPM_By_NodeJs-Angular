import { injectable } from 'tsyringe';
import { Database } from '../config/database';
import express, { Request, Response } from 'express';
import { ChiTietDonHang, khachHang } from '../model/Model';
@injectable()
export class HomeRepository {
    constructor(private db: Database) { }

    async GetSanPhamBanChay(soluong: any): Promise<void> {
        try {
            const sql = 'CALL HomeBanChay(?)';
            const [results] = await this.db.query(sql, [soluong]);
            return results;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
    async GetSpByLoaiId(id:any,soluong: any): Promise<void> {
        try {
            const sql = 'CALL HomeGetSanPhamByLoai(?, ?)';
            const [results] = await this.db.query(sql, [id, soluong]);
            return results;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
    async GetSanPhamMoi(soluong: any): Promise<void> {
        try {
            const sql = 'CALL HomeGetMoi(?)';
            const [results] = await this.db.query(sql, [soluong]);
            return results;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
    async GetSanPham(pageSize: any, pageIndex:any): Promise<any> {
        try {
            const page = pageIndex || 1;
            const limit = pageSize || 10;
            const offset = (page - 1) * limit;
            const sql = 'CALL HomeGetSanPham(?, ?)';
            const [results] = await this.db.query(sql, [limit, offset]);
            const [totalProducts] = await this.db.query(`
            SELECT COUNT(*) as total from sanpham inner join loaisp on sanpham.loai_id = loaisp.loai_id inner join tg 
            on sanpham.tg_id = tg.tG_id inner join nhasx on sanpham.nsx_id = nhasx.nsx_id inner join giaca on sanpham.sanp_id = giaca.sanp_id;`,[]);
            const tt = totalProducts;
            const json = {
                results,
                total: tt,
              }
            return json;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
    async GetLoaiSp(): Promise<void> {
        try {
            const sql = 'CALL GetTheLoaiAll()';
            const [results] = await this.db.query(sql, []);
            return results;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
    async GetTacGia(): Promise<void> {
        try {
            const sql = 'CALL GetAllTg()';
            const [results] = await this.db.query(sql, []);
            return results;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
    async GetSanphamById(id: string): Promise<any> {
        try {
            const sql = 'CALL GetSanphamById(?)';
            const [results]= await this.db.query(sql, [id]);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async GetKhachHangBySdt(sdt: string): Promise<any> {
        try {
            const sql = 'CALL HomeGetKhachHangBySdt(?)';
            const [results]= await this.db.query(sql, [sdt]);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async GetSanphamByLoai(id: string): Promise<any> {
        try {
            const sql = 'CALL GetSanphamByLoai(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async GetSanphamByNsx(id: string): Promise<any> {
        try {
            const sql = 'CALL GetSanphamByNsx(?)';
            const [results] = await this.db.query(sql, [id]);
            return results;
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async GetSanphamByTg(id: string, sl: string): Promise<any> {
        try {
            const sql = 'CALL GetSanphamByTg(?, ?)';
            const [results] = await this.db.query(sql, [id, sl]);
            return results;
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async GetSanphamByName(name: string): Promise<any> {
        try {
            const sql = 'CALL GetSanphamByName(?)';
            const [results] = await this.db.query(sql, [name]);
            return results;
        }
        catch (Error: any) {
            throw new Error;
        }
    }

    async GetOrderBySdt(sdt: string): Promise<any> {
        try {
            const sql = 'CALL HomeOrderSearch(?)';
            const [results] = await this.db.query(sql, [sdt]);
            return results;
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async confirmOrder(id: string): Promise<any> {
        try {
            const sql = 'CALL confirmOrder(?)';
            await this.db.query(sql, [id]);
            return true;
        }
        catch (Error: any) {
            throw new Error;
        }
    }

    async CreateDonHang(khachhang: khachHang, chitietdonhang: ChiTietDonHang[], gia:any): Promise<void> {
        // Thêm khách hàng mới

        const sql = `INSERT INTO khachhang (tenKhachHang, diaChi, email, sdt) VALUES (?, ?, ?, ?)`;

        const values = [
            khachhang.tenKhachHang,
            khachhang.diaChi,
            khachhang.email,
            khachhang.sdt,
        ];

        await this.db.query(sql, values);

        // Lấy ID của khách hàng mới

        const maKhachHang = await this.db.query("SELECT LAST_INSERT_ID() AS id",[]).then((results) => {
            return results[0].id;
          });

        // const date = new Date();

        const insertDonHang = `INSERT INTO donhang (maKhachHang, ngayDat, trangThai, giaTien, trangThaiThanhToan) VALUES (?,  curdate(), ?,?,?)`;
        await this.db.query(insertDonHang, [maKhachHang, 'Chưa xác nhận', gia, 'Chưa thanh toán']);

        const maDonHang = await this.db.query("SELECT LAST_INSERT_ID() AS id",[]).then((results) => {
            return results[0].id;
          });


        for (const chitietDonHang of chitietdonhang) {
            const sql = `INSERT INTO chitietdonhang (maDonHang, sanp_id, soLuong, gia) VALUES (?, ?, ?, ?)`;

            const values = [maDonHang, chitietDonHang.sanp_id, chitietDonHang.soLuong, chitietDonHang.gia];

            await this.db.query(sql, values);
        }
    }

    





}