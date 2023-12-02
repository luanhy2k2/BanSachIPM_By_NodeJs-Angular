import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { branch } from 'src/app/Models/branch.entity';
import { branchService } from 'src/app/Service/admin/brandService';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent {
  requestData = {
    danhmuc_id: null,
    name: ''
  };
  constructor(private branchService: branchService, private route: ActivatedRoute) { }
  branch: branch[] = [];
  pageIndex: number = 0;
  totalPageArray: number[] = []
  name: string = "";
  
  ngOnInit() {
    this.getBranch();

  }
  getBranch() {
    this.branchService.countBranch().subscribe(res => {
      var total = Number(res);
      var toatlPage = Math.ceil(total / 2);
      this.totalPageArray = Array.from({ length: toatlPage }, (_, index) => index + 1);
      this.branchService.getBranch(this.pageIndex).subscribe(res => {
        this.branch = res;
      })
    })
  }
  getBranchByName() {
    this.branchService.getBrandbyName(this.name).subscribe(data => {
      this.branch = data;
    });
  }
  nextPage() {
    this.pageIndex++;
    this.getBranch();
  }
  previousPage() {
    this.pageIndex--;
    this.getBranch();
  }
  setPage(pageInDex: any) {
    this.pageIndex = pageInDex - 1;
    this.getBranch();
  }
  addProductType() {
    this.branchService.addProductType(this.requestData)
      .subscribe(
        response => {
          alert('Thêm loại sản phẩm thành công');
          // Xử lý response nếu cần thiết
        },
        error => {
          alert('Lỗi khi thêm loại sản phẩm');
          // Xử lý lỗi nếu cần thiết
        }
      );
  }
}
