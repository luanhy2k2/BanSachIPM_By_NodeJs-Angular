// admin-guard.service.ts
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const data = localStorage.getItem('user'); 
    const user = data ? JSON.parse(data) : null;// Đảm bảo rằng 'user' là key lưu thông tin người dùng trong localStorage
    if (user && user.loaiQuyen === 'admin') {
      return true;
    }
    // Nếu không phải admin, chuyển hướng đến trang khác
    this.router.navigate(['/home']); // Thay đổi '/home' bằng đường dẫn mong muốn
    return false;
  }
}
