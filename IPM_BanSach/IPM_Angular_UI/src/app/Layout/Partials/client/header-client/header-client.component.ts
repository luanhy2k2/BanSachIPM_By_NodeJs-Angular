import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent {
  constructor(private route: Router){}
  user: any;
  ngOnInit(){
    var userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
  }
  logOut(){
    localStorage.removeItem('user');
    alert("Đăng xuất thành công");
    this.route.navigate(['/client/Home']);
  }
}
