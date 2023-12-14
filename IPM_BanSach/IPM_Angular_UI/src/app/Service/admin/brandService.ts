import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { branch } from "src/app/Models/branch.entity";
const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})

export class branchService{
    constructor(private http:HttpClient){}
    getBranch():Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/loaisp/getall`);
    }
    getBranchdbyId(id:any):Observable<any>{
        return this.http.get<any>(`${url}/api/loaisp/getbyid/${id}`);
    }
    countBranch(){
        return this.http.get(`${url}/api/categories/count`);
    }
    getBrandbyName(name: string): Observable<branch[]>{
        return this.http.get<branch[]>(`${url}/api/loaisp/search/${name}/0/8`)
    }
    addBranch(branch: any) {
        return this.http.post<any>(`${url}/api/loaisp/create`, branch);
    }
    editBranch(branch: any) {
        return this.http.post<any>(`${url}/api/loaisp/update`, branch);
    }
    deleteBranch(id: any) {
        return this.http.delete<any>(`${url}/api/loaisp/delete/${id}`);
    }
}