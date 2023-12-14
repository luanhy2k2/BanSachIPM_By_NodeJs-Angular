import { NgModule } from "@angular/core";
import { BranchComponent } from './branch/branch.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { StatisticComponent } from './statistic/statistic.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';



@NgModule({
    declarations:[
    BranchComponent,
    ProductComponent,
    OrderComponent,
    OrderDetailComponent,
    StatisticComponent,
    EditBranchComponent,
    EditProductComponent,
   
  ],
    imports:[
        FormsModule,
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule{}