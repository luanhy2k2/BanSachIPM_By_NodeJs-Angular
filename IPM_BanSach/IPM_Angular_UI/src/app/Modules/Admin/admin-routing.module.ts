import { RouterModule, Routes } from "@angular/router";
import { BranchComponent } from "./branch/branch.component";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./product/product.component";
import { OrderComponent } from "./order/order.component";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";
import { StatisticComponent } from "./statistic/statistic.component";
import { EditBranchComponent } from "./edit-branch/edit-branch.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { ImportInvoiceComponent } from "./import-invoice/import-invoice.component";
import { EditImportInvoiceComponent } from "./import-invoice/edit/edit-importinvoice.component";
import { AuthorComponent } from "./author/author.component";
import { AuthorEditComponent } from "./author/author-edit/author-edit.component";
import { CompanyComponent } from "./company/company.component";
import { CompanyEditComponent } from "./Company/company-edit/company-edit.component";
import { WareHouseComponent } from "./ware-house/ware-house.component";

const routes: Routes = [
    {
        path: 'branch',
        component:BranchComponent
        
    },
    {
        path: 'company',
        component:CompanyComponent
        
    },
    {
        path: 'wareHouse',
        component:WareHouseComponent
        
    },
    {
        path: 'company/edit/:id',
        component:CompanyEditComponent
        
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
        path: 'hoadonnhap',
        component:ImportInvoiceComponent
        
    },
    {
        path: 'hoadonnhap/edit/:id',
        component:EditImportInvoiceComponent
        
    },
    {
        path: 'author',
        component:AuthorComponent
        
    },
    {
        path: 'author/edit/:id',
        component:AuthorEditComponent
        
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