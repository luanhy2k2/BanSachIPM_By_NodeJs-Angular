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
import { ImportInvoiceComponent } from './import-invoice/import-invoice.component';
import {  EditImportInvoiceComponent } from './import-invoice/edit/edit-importinvoice.component';
import { AuthorComponent } from './author/author.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { CompanyComponent } from './company/company.component';

import { CompanyEditComponent } from './Company/company-edit/company-edit.component';
import { PartialsModule } from "src/app/Layout/Partials/Partials.module";
import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule } from "ckeditor4-angular";
import { WareHouseComponent } from './ware-house/ware-house.component';



@NgModule({
    declarations:[
    BranchComponent,
    ProductComponent,
    OrderComponent,
    OrderDetailComponent,
    StatisticComponent,
    EditBranchComponent,
    EditProductComponent,
    ImportInvoiceComponent,
    EditImportInvoiceComponent,
    AuthorComponent,
    AuthorEditComponent,
    CompanyComponent,
   
    CompanyEditComponent,
         WareHouseComponent,
   
  ],
    imports:[
        FormsModule,
        CommonModule,
        AdminRoutingModule,
        HttpClientModule,
        CKEditorModule
    ]
})
export class AdminModule{}