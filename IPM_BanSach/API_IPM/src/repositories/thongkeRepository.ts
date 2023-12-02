import { injectable } from 'tsyringe';
import { Database } from '../config/database';
import express, { Request, Response } from 'express';

@injectable()
export class ThongKeRepository {
    constructor(private db: Database) { }
    async ThongKeDoanhThuHomNay(): Promise<any> {
        try {
            const sql = 'CALL ThongKeDoanhThuHomNay()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeDoanhThuTrongThang(): Promise<any> {
        try {
            const sql = 'CALL ThongKeDoanhThuTrongThang()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeDoanhThuTrongTuan(): Promise<any> {
        try {
            const sql = 'CALL ThongKeDoanhThuTrongTuan()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeSanPhamHetHang(): Promise<any> {
        try {
            const sql = 'CALL ThongKeSanPhamHetHang()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeSoDonHang(): Promise<any> {
        try {
            const sql = 'CALL ThongKeSoDonHang()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeSoDonHangHomNay(): Promise<any> {
        try {
            const sql = 'CALL ThongKESoDonHangHomNay()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeSoDonHangTrongThang(): Promise<any> {
        try {
            const sql = 'CALL ThongKeSoDonHangTrongThang()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeSoDonHangTrongTuan(): Promise<any> {
        try {
            const sql = 'CALL ThongKeSoDonHangTrongTuan()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeTongSanPham(): Promise<any> {
        try {
            const sql = 'CALL ThongKeTongSanPham()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }
    async ThongKeTongSoTienBan(): Promise<any> {
        try {
            const sql = 'CALL ThongKeTongSoTienBan()';
            const [results]= await this.db.query(sql, []);
            return results[0];
        }
        catch (Error: any) {
            throw new Error;
        }
    }

    

    





}