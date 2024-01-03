import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as printJS from 'print-js';
import { PaymentService } from 'src/app/Service/Client/form/PaymentService';
import { InvoiceService } from 'src/app/Service/admin/InvoiceService';
import { orderService } from 'src/app/Service/admin/orderService';

@Component({
  selector: 'app-export-invoice',
  templateUrl: './export-invoice.component.html',
  styleUrls: ['./export-invoice.component.scss']
})
export class ExportInvoiceComponent {
  constructor(private invoiceService: InvoiceService, private paymentService:PaymentService, private http: HttpClient) { }
  invoice!: any[];
  total: number = 0;
  orderById!: any;
  pageIndex: number = 1;
  totalPageArray: number[] = [];
  ngOnInit() {
    this.getOrder();
  }
  getOrder() {
    this.invoiceService.getExportInvoice(this.pageIndex).subscribe(res => {
      const productCount = Number(res.total);
      this.total = Math.ceil(productCount / 8)
      this.invoice = res.results
      this.totalPageArray = Array.from({ length: this.total }, (_, index) => index + 1);
    })
  }
  nextPage() {
    this.pageIndex++;
    this.getOrder();
  }
  previousPage() {
    this.pageIndex--;
    this.getOrder();
  }
  setPage(pageInDex: any) {
    this.pageIndex = pageInDex;
    this.getOrder();
  }
}
