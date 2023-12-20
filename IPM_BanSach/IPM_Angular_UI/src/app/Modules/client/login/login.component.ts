import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }
  username: any;
  password: any;
  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
      console.log(res.loaiQuyen);
     if(!res){
      alert('Thông tin đăng nhập không chính xác');
     }
      else {
        
        localStorage.setItem("user", JSON.stringify(res));
        if (res.loaiQuyen === "admin") {
          window.location.href = "http://localhost:4200/admin/product"
          
        } else {
          window.location.href = "http://localhost:4200/client/Home"
          
        }
      } 
    })
  }
}
