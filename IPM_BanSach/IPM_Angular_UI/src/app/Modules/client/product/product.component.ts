import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loaisp } from 'src/app/Models/loaisp.entity';
import { product } from 'src/app/Models/product.entity';
import { HomeGetDataService } from 'src/app/Service/Client/HomePage/Home-getData';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private service: HomeGetDataService, private http: HttpClient) { }
  pageInDex: number = 1
  totalPagesArray: number[] = [];
  products!: any[]
  total!: number;
  loaisp!: loaisp[];

  ngOnInit(): void {
    this.loadData();
    this.service.getCategories().subscribe(res=>{
      this.loaisp = res;
    })
  }
  

  previousPage() {
    this.pageInDex--
    this.loadData()
  }
  nextPage() {
      this.pageInDex++;
      this.loadData()
  }
  setCurrentPage(page: number) {
    this.pageInDex = page;
    this.loadData()
  }
  loadData() {
    this.http.get<any>("http://localhost:3000/api/Home/productCount").subscribe(res => {
      const productCount = Number(res.total);
      this.total = Math.ceil(productCount / 8)
      this.totalPagesArray = Array.from({ length: this.total }, (_, index) => index + 1);
    })
    
    this.service.getAllProduct(this.pageInDex).subscribe((data) => {
      this.products = data;

    });
  }
}
