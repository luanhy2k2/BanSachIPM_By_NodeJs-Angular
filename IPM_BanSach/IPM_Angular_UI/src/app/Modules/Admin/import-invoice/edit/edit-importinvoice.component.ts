import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/Service/admin/InvoiceService';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-importinvoice.component.html',
  styleUrls: ['./edit-importinvoice.component.scss']
})
export class EditImportInvoiceComponent {
  constructor(private invoiceService:InvoiceService, private http:HttpClient,private route :ActivatedRoute){}
  requestData = {
    soHoaDon: this.route.snapshot.paramMap.get('id'),
    sanp_id: 0,
    soLuong: 0
  };
  invoiceDetail!: any[];

  ngOnInit(){
    this.getOrderDetail();
   }
  getOrderDetail(){

    this.route.params.subscribe(params => {
      const paramValue = params['id']; 
      this.invoiceService.getImportInvoiceDetailById(paramValue).subscribe(res=>{
        this.invoiceDetail = res;
      });
    
    });
  };
  addInvoiceDetail(){
    this.invoiceService.addImportInvoiceDetail(this.requestData).subscribe(res=>{
      alert("Thêm chi tiết thành công!");
      this.getOrderDetail();
    })
  }
  
}
