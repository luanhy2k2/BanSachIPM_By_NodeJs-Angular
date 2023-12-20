import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { authorService } from 'src/app/Service/admin/authorService';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent {
  constructor(private service: authorService, private route: ActivatedRoute) { }
  author: any;
  ngOnInit() {
    // Sử dụng ActivatedRoute để theo dõi thay đổi params
    this.route.params.subscribe(params => {
      const paramValue = params['id']; // Thay 'yourParamName' bằng tên param bạn đang sử dụng
      this.loadData(paramValue);
    });
  }
  loadData(paramValue: string) {
    this.service.getAuthorById(paramValue).subscribe(data => {
      this.author = data;
    });
  }
  editAuthor() {
    this.service.editAuthor(this.author).subscribe(response => {
      alert("Sửa sản phẩm thành công");
    })
  }
}
