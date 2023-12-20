import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InvoiceService } from 'src/app/Service/admin/InvoiceService';

@Component({
  selector: 'app-import-invoice',
  templateUrl: './import-invoice.component.html',
  styleUrls: ['./import-invoice.component.scss']
})
export class ImportInvoiceComponent {
  constructor(private http:HttpClient, private InvoiceService: InvoiceService){}
  requestData = {
    maNguoiDung:'',
    nsx_id:''
  };
  totalPageArray: any[] = [];
  total:number = 0;
  pageIndex:number = 1;
  ImportInvoice:any[] = [];
  ngOnInit(){
    this.getInvoice();
  }
  getInvoice(){
    this.http.get<any>("http://localhost:3000/api/hoadonnhap/getall/1/5").subscribe(res => {
      const productCount = Number(res.total);
      console.log(productCount);
      this.total = Math.ceil(productCount / 5)
      this.totalPageArray = Array.from({ length: this.total }, (_, index) => index + 1);
      console.log(this.totalPageArray)
    })
    this.InvoiceService.getImportInvoice(this.pageIndex).subscribe((data) => {
      this.ImportInvoice = data.results;
    });
  }
  nextPage(){
    if(this.pageIndex<this.total){
      this.pageIndex++;
      this.getInvoice();
    }
    
  }
  previousPage(){
   
      this.pageIndex--;
      this.getInvoice();
  }
  setPage(pageInDex:any){
    this.pageIndex = pageInDex;
    this.getInvoice();
  }
  addinvoice(){
    this.InvoiceService.addImportInvoice(this.requestData).subscribe(res=>{
      alert("Thêm hoá đơn thành công!")
    })
  }
}
