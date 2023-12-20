import { Component } from '@angular/core';
import { companyService } from 'src/app/Service/admin/companyService';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor(private CompanyService:companyService){ }
  Company: any[] = [];
  pageIndex: number = 0;
  totalPageArray: number[] = []
  name: string = "";
  requestData = {
    nsx_name: '',
   
    diaChi:'',
    sdt:''
  };
  ngOnInit(){
    this.getCompany();
  }
  getCompany(){
    this.CompanyService.getCompany().subscribe(res=>{
      this.Company = res;
    })
  }
  getCompanyByName(){
    this.CompanyService.getCompanyByName(this.name).subscribe(data =>{
      console.log(data)
      this.Company = data;
    });
  }
  addCompany() {
    this.CompanyService.addCompany(this.requestData).subscribe(response=>{
      alert("Thêm thành công!");
      this.getCompany();
    }
    );
  }
  deleteCompany(id: number) {
    this.CompanyService.deleteCompany(id).subscribe(response=>{
      alert("Xoá thành công!");
      this.getCompany();
    });
  }
}
