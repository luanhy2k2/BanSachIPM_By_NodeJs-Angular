import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/UserService';
import { branchService } from 'src/app/Service/admin/brandService';

import { productService } from 'src/app/Service/admin/productService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private productService:productService,private user:UserService, private branchService:branchService, private http: HttpClient){ }
  product!: any[];
  total:number = 0;
  productById!: any;
  pageIndex: number = 1;
  totalPageArray: number[] = []
  name: string = "";
  branch:any[] = [];
  company: any[] = [];
  author: any[] = [];
  requestData = {
     
      sanp_name: "",
      size:"",
      tg_id:0,
      loai_id:0,
      nsx_id:0,
      soTrang:0,
      tomTat:"",
      namsx:"",
      image:"",
      price:0
  };
  selectedFile!: File; onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  ngOnInit(){
   this.getproduct();
   this.getBranch();
   this.getCompany();
   this.getAuthor()
  }
  getproduct(){
    this.http.get<any>("http://localhost:3000/api/Home/productCount").subscribe(res => {
      const productCount = Number(res.total);
      this.total = Math.ceil(productCount / 8)
      this.totalPageArray = Array.from({ length: this.total }, (_, index) => index + 1);
    })
    this.productService.getAllProduct(this.pageIndex).subscribe((data) => {
      this.product = data;
    });
  }
  getBranch(){
    this.branchService.getBranch().subscribe(data =>{
      this.branch = data;
    });
  }
  getCompany(){
    this.productService.getAllCompany().subscribe(data =>{
      this.company = data;
    });
  }
  getAuthor(){
    this.productService.getAllTacgia().subscribe(data =>{
      this.author = data;
    });
  }
  getproductByName(){
    this.productService.getBrandbyName(this.name).subscribe(data =>{
      this.product = data;
    });
  }
  openModel(id:number) {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
      this.productService.getProductById(id).subscribe(res=>{
        this.productById = res;
      })
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }
  nextPage(){
    if(this.pageIndex<this.total){
      this.pageIndex++;
      this.getproduct();
    }
    
  }
  previousPage(){
    if(this.pageIndex>0){
      this.pageIndex=Math.max(1,this.pageIndex--);
      this.getproduct();
    }
    
  }
  setPage(pageInDex:any){
    this.pageIndex = pageInDex;
    this.getproduct();
  }
  addproduct() {
    this.user.uploadFile(this.selectedFile).subscribe(
      response => {
        console.log(response);
        this.requestData.image = response.filename.originalname;
        this.productService.addproduct(this.requestData).subscribe(response => {
          alert("Thêm sản phẩm thành công!");
          this.getproduct();
        })
      },
    );
  }
  // addproduct() {
  //   this.productService.addproduct(this.requestData).subscribe(response=>{
  //     alert("suceess");
  //     this.getproduct();
  //   }
    
  //   );
  // }
  deleteproduct(id: number) {
    this.productService.deleteproduct(id).subscribe(response=>{
      alert("suceess");
      this.getproduct();
    }
    
    );
    
  }
}


