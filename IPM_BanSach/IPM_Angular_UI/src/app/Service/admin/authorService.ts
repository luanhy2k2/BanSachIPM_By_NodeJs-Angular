import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const url = 'http://localhost:3000';
@Injectable({
    providedIn: "root"
})

export class authorService{
    constructor(private http:HttpClient){}
    getAuthor():Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/tacgia/getall`);
    }
    getAuthorById(id:any):Observable<any>{
        return this.http.get<any>(`${url}/api/tacgia/getbyid/${id}`);
    }
    countAuthor(){
        return this.http.get(`${url}/api/categories/count`);
    }
    getAuthorByName(name: string): Observable<any[]>{
        return this.http.get<any[]>(`${url}/api/tacgia/getbyname/${name}`)
    }
    addAuthor(author: any) {
        return this.http.post<any>(`${url}/api/tacgia/create`, author);
    }
    editAuthor(author: any) {
        return this.http.post<any>(`${url}/api/tacgia/update`, author);
    }
    deleteAuthor(id: any) {
        return this.http.delete<any>(`${url}/api/tacgia/delete/${id}`);
    }
}