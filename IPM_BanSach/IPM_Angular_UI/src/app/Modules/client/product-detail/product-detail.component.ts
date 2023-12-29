import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { commentProduct } from 'src/app/Models/commentProduct.entity';
import { product } from 'src/app/Models/product.entity';
import { productDetail } from 'src/app/Models/productDetail.entity';
import { CartService } from 'src/app/Service/Client/form/CartService';
import { ProductDetailService } from 'src/app/Service/Client/form/ProductDetail-getData';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private user: UserService
  ) {}

  routeParams = this.route.snapshot.paramMap;
  productDetail!: productDetail;
  productSameAuthors: product[] = [];
  comment: any;
  replyComment:any[] = [];
  addCommentEntity = {
    id: this.routeParams.get('id'),
    us_id: 0,
    content: ""
  }
  addReplyCommentEntity = {
    id: 0,
    us_id: 0,
    content: ""
  }
  ngOnInit() {
    const productId = this.routeParams.get('id');
    this.productDetailService.getProductById(productId).subscribe(
      (res) => {
        this.productDetail = res;
        this.productDetailService.getProductSameAuthor(res.tg_id).subscribe(
          (respon) => {
            this.productSameAuthors = respon;
          }
        );
        this.getComment();
        
      },
      
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
  toggleReply(index: number) {
    this.comment[index].showReply = !this.comment[index].showReply;
}
getComment() {
  this.productDetailService.getCommentProduct(this.routeParams.get('id')).subscribe(
    (respon) => {
      this.comment = respon;
      console.log(this.comment);
      
      // Gọi getReplyComment cho mỗi comment để lấy reply
      this.comment.forEach((comment:any) => {
        this.getReplyComment(comment.id);
      });
    },
    (error) => {
      console.error('Error fetching comments:', error);
    }
  );
}

  getReplyComment(commentId: number) {
    
    this.productDetailService.getReplyComment(commentId).subscribe(
      (respon) => {
        this.replyComment[commentId] = respon;
        console.log(this.replyComment);
      },
      (error) => {
        console.error('Error fetching reply comments:', error);
      }
    );
  }
  
 
  addComment() {
    const us = this.user.getUser();
    this.addCommentEntity.us_id = us.maTaiKhoan
    this.productDetailService.addCommentProduct(this.addCommentEntity).subscribe(
      (response) => {
        console.log('Comment added successfully:', response);
        alert("Bình luận thành công!");
        this.getComment();
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  };
  addReplyComment(id:number) {
    const us = this.user.getUser();
    this.addCommentEntity.us_id = us.maTaiKhoan
    this.addReplyCommentEntity.id = id
    this.productDetailService.addCommentProduct(this.addReplyCommentEntity).subscribe(
      (response) => {
        console.log('Comment added successfully:', response);
        alert("Bình luận thành công!");
       
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }


  addToCart() {
    this.cartService.addToCart(this.productDetail);
  }
}
