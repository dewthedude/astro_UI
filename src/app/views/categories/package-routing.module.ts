import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { PackageComponent } from './package/package.component';
import { PriceComponent } from './price/price.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Package'
    },
    children:
      [{
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Category',
        },
      },
      {
        path: 'subcategory',
        component: SubCategoryComponent,
        data: {
          title: 'SubCategory',
        },
      },
      {
        path: 'product',
        component: ProductsComponent,
        data: {
          title: 'Products',
        },
      },
      
      {
        path: 'price',
        component: PriceComponent,
        data: {
          title: 'Price',
        },
      },
      {
        path: 'package',
        component: PackageComponent,
        data: {
          title: 'Packages',
        },
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
