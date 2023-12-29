import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/UserService';
import { branchService } from 'src/app/Service/admin/brandService';
import { productService } from 'src/app/Service/admin/productService';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  constructor(private productServie: productService,private branchService:branchService,private route :ActivatedRoute, private user:UserService){}
  branch:any[] = [];
  company:any[] = [];
  author:any[] = [];
 product: any;
 selectedFile!: File;
 ngOnInit() {
   // Sử dụng ActivatedRoute để theo dõi thay đổi params
   this.route.params.subscribe(params => {
     const paramValue = params['id']; // Thay 'yourParamName' bằng tên param bạn đang sử dụng
     this.loadData(paramValue);
   });
   this.getBranch();
   this.getCompany();
   this.getAuthor()
 }
 onFileChanged(event: any) {
   this.selectedFile = event.target.files[0];
 }
 getBranch() {
   this.branchService.getBranch().subscribe(data => {
     this.branch = data;
   });
 }
 getCompany() {
   this.productServie.getAllCompany().subscribe(data => {
     this.company = data;
   });
 }
 getAuthor() {
  this.productServie.getAllTacgia().subscribe(data => {
    this.author = data;
  });
}
 loadData(paramValue: string) {
   this.productServie.getProductById(paramValue).subscribe(data => {
     this.product = data;
   });
 }
 editproduct() {
  if(!this.selectedFile){
    this.productServie.editproduct(this.product).subscribe(response=>{
      alert("Sửa sản phẩm thành công");
    })
  }
  else{
    this.user.uploadFile(this.selectedFile).subscribe(
      response => {
        console.log(response);
        this.product.image = response.filename.originalname;
        this.productServie.editproduct(this.product).subscribe(response=>{
          alert("Sửa sản phẩm thành công");
        })
      },
    );
  }
   
  
 }
}
