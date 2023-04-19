import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'
import { log } from 'console';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.scss']
})
export class UserProductComponent {
  constructor(private _router: Router, private _user: UserService) { }
  productList: any;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._user.getProducts().subscribe(res => {
      
      if (res != null) {
        let response: any = res;
        this.productList = response.data;
        console.log(this.productList);
        
      }
      else {
        alert("No Products Found")
      }
    },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  getDetails() {
    this._router.navigate(['/productdetails']);
  }
}
