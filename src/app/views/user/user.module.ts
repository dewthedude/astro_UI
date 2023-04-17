import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { LayoutComponent } from './layout/layout.component';
import { PlanComponent } from './plan/plan.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusComponent } from './contactus/contactus.component';

import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FooterComponent } from './footer/footer.component';
import { UserProductComponent } from './user-product/user-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    PlanComponent,
    ContactusComponent,
    ProductdetailsComponent,
    FooterComponent,
    UserProductComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbAccordionModule
  ]
})
export class UserModule { }
