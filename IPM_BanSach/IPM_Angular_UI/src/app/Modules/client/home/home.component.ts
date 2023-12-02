import { Component } from '@angular/core';
import { product } from 'src/app/Models/product.entity';
import { HomeGetDataService } from 'src/app/Service/Client/HomePage/Home-getData';
const url = 'https://localhost:44301/api/Home/banChay/10';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private homeService: HomeGetDataService){}
  products: product[] = [];
  quantityProduct:number = 8;
  
  ngOnInit() {
    this.loadProductData('getbanchay');
  }

  sanPhamMoi() {
    this.loadProductData('getsanphammoi');
  }

  sanPhamBanChay() {
    this.loadProductData('getbanchay');
  }
  sanPhamHuyenAo() {
    this.loadProductByCategory(1);
  }
  sanPhamTinhCam() {
    this.loadProductByCategory(4);
  }
  showMoreProduct() {
    this.quantityProduct++;
    this.loadProductData();
     // Load data based on the current active criteria
  }
  private loadProductData(criteria?: string) {
    // Default to 'banChay' if no criteria is provided
    criteria = criteria || 'getbanchay';
    this.homeService.getProductData(criteria, this.quantityProduct).subscribe(res => {
      this.products = res;
    });
  }

  private loadProductByCategory(categoryId: number) {
    this.homeService.getProductsCategory(categoryId, this.quantityProduct).subscribe(res => {
      this.products = res;
    });
  }
}
