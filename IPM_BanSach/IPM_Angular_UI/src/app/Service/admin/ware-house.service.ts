import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class WareHouseService {

  constructor(private http: HttpClient) { }
  getWareHouseById(id: any, pageIndex:number): Observable<any> {
    return this.http.get<any>(`${url}/api/Kho/getkho/${id}/8/${pageIndex}`);
  }
}
