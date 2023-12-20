import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/Client/form/CartService';
import { PaymentService } from 'src/app/Service/Client/form/PaymentService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private cartService: CartService, private PayService: PaymentService) { }
  total: number = 0;
  user: any;
  payForm = {
    khachhang: {
      tenKhachHang: "",
      diaChi: "",
      email: "",
      sdt: ""
    },
    listchitiet: [
      {
        sanp_id: "",
        quantity: "",
        gia: ""
      }
    ],
    gia: 0
  }
  products!: any[]
  ngOnInit() {
    this.loadCart();
    this.total = this.cartService.getTotalPrice();
    var userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
    if(this.user){
      this.payForm.khachhang.tenKhachHang = this.user.hoTen;
      this.payForm.khachhang.diaChi = this.user.diaChi;
      this.payForm.khachhang.email = this.user.email;
      this.payForm.khachhang.sdt = this.user.sdt;
    }
  }
  loadCart() {
    const cartData = this.cartService.getCart()
    if (cartData !== null) {
      this.products = JSON.parse(cartData);
    }
  }
  createDonHang() {
    const cartData = this.cartService.getCart()
    if (cartData !== null) {
      const cart = JSON.parse(cartData);
      this.payForm.listchitiet = cart;
      var totalPrice: number = cart.reduce((acc: number, product: any) => {
        return acc + product.gia * product.quantity;
      }, 0);
      this.payForm.gia = totalPrice;
      if(!this.user){
        alert("Bạn cần phải đăng nhập trước khi đặt hàng!")
      }
      else
      {
       
        this.PayService.payMent(this.payForm, this.user).subscribe(response => {
          alert("Đặt hàng thành công");
        })
      }
    }

  }
}
