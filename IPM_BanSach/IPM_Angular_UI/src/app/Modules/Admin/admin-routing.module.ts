import { RouterModule, Routes } from "@angular/router";
import { BranchComponent } from "./branch/branch.component";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./product/product.component";
import { OrderComponent } from "./order/order.component";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { EditBranchComponent } from "./edit-branch/edit-branch.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";

const routes: Routes = [
    {
        path: 'branch',
        component:BranchComponent
        
    },
    {
        path: 'branch/edit/:id',
        component:EditBranchComponent
        
    },
    {
        path: 'product',
        component:ProductComponent
        
    },
    {
        path: 'product/edit/:id',
        component:EditProductComponent
        
    },
    {
        path: 'order',
        component:OrderComponent
        
    },
    {
        path: 'statistic',
        component:StatisticComponent
        
    },
    {
        path: 'orderDetail/:id',
        component:OrderDetailComponent
        
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule { }