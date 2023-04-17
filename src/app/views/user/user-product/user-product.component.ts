import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.scss']
})
export class UserProductComponent {
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  getDetails(){
    this._router.navigate(['/productdetails']);
  }
}
