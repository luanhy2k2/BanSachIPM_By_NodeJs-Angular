import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { companyService } from 'src/app/Service/admin/companyService';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent {
  constructor(private service: companyService, private route: ActivatedRoute) { }
  company: any;
  ngOnInit() {
    // Sử dụng ActivatedRoute để theo dõi thay đổi params
    this.route.params.subscribe(params => {
      const paramValue = params['id']; // Thay 'yourParamName' bằng tên param bạn đang sử dụng
      this.loadData(paramValue);
    });
  }
  loadData(paramValue: string) {
    this.service.getCompanyById(paramValue).subscribe(data => {
      this.company = data;
    });
  }
  editcompany() {
    this.service.editCompany(this.company).subscribe(response => {
      alert("Sửa thông tin thành công");
    })
  }
}
