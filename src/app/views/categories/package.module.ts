import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from '@coreui/angular';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

import { PackageComponent } from './package/package.component';
import { PriceComponent } from './price/price.component';
import { ProductsComponent } from './products/products.component';
import { PageloaderComponent } from './pageloader/pageloader.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'




@NgModule({
  imports: [
    CommonModule,
    PackageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    NgbCarouselModule,
    TooltipModule.forRoot(),

    NgbModule

  ],
  declarations: [
    CategoryComponent,
    SubCategoryComponent,
    PackageComponent,
    PriceComponent,
    ProductsComponent,
    PageloaderComponent
  ]
})
export class PackageModule { }
