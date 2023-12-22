import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { orderService } from 'src/app/Service/admin/orderService';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  constructor(private orderService:orderService, private http:HttpClient){}
  order!: any[];
  total:number = 0;
  orderById!: any;
  pageIndex: number = 1;
  totalPageArray: number[] = [];
  ngOnInit(){
    this.getOrder();
   }
  getOrder(){
    this.http.get<any>("http://localhost:3000/api/donhang/orderCount").subscribe(res => {
      const productCount = Number(res.total);
      this.total = Math.ceil(productCount / 8)
      this.totalPageArray = Array.from({ length: this.total }, (_, index) => index + 1);
    })
    this.orderService.getOrder(this.pageIndex).subscribe((data) => {
      this.order = data;
    });
  }
  conFirmOrder(id:any){
    this.orderService.confirmOrder(id).subscribe(res=>{
      alert("Xác nhận thành công")
    })
  }
  nextPage(){
    this.pageIndex++;
    this.getOrder();
  }
  previousPage(){
    this.pageIndex--;
    this.getOrder();
  }
  setPage(pageInDex:any){
    this.pageIndex = pageInDex;
    this.getOrder();
  }
}
