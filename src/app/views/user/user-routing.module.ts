import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component'
import { LayoutComponent } from './layout/layout.component';
import { PlanComponent } from './plan/plan.component';
import { UserProductComponent } from './user-product/user-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    },
    children:
      [
        {
          path: 'home',
          component: HomeComponent,
          data: {
            title: 'Home'
          }
        },
        {
          path: 'product',
          component: UserProductComponent,
          data: {
            title: 'Products'
          }
        },

        {
          path: 'details/:id',
          component: ProductdetailsComponent,
          data: {
            title: 'Product Details'
          }
        },
        {
          path: 'aboutus',
          component: AboutusComponent
        },
        {
          path: 'plan/:id',
          component: PlanComponent
        },
        {
          path: 'contactus',
          component: ContactusComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
