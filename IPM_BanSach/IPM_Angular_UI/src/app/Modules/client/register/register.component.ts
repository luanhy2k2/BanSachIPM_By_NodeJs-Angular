import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService: UserService) { }
  requestData = {
    hoTen: "",
    ngaySinh: "",
    gioiTinh: "",
    diaChi: "",
    email: "",
    sdt: "",
    taiKhoan: "",
    matKhau: ""
  }
  createAccount() {
    this.userService.singUp(this.requestData).subscribe(
      res => {
        alert("Đăng kí tài khoản thành công!")
      },
      err => {
        alert("Email đã tồn tại trong hệ thống!")
      }
    )
  }
}
