import { Component } from '@angular/core';
import { authorService } from 'src/app/Service/admin/authorService';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  constructor(private authorService:authorService){ }
  author: any[] = [];
  pageIndex: number = 0;
  totalPageArray: number[] = []
  name: string = "";
  requestData = {
    tG_name: '',
    email:'',
    tG_diaChi:'',
    sdt:''
  };
  ngOnInit(){
    this.getauthor();
  }
  getauthor(){
    this.authorService.getAuthor().subscribe(res=>{
      this.author = res;
    })
  }
  getauthorByName(){
    this.authorService.getAuthorByName(this.name).subscribe(data =>{
      console.log(data)
      this.author = data;
    });
  }
  addauthor() {
    this.authorService.addAuthor(this.requestData).subscribe(response=>{
      alert("Thêm thành công!");
      this.getauthor();
    }
    );
  }
  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe(response=>{
      alert("Xoá thành công!");
      this.getauthor();
    }
    
    );
    
  }
}
