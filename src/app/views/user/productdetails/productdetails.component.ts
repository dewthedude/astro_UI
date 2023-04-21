import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _user: UserService) { }
  product: any;
  countValue: number = 1;
  id: any
  ngOnInit() {

    this._route.params.subscribe(params => {
      const id = params['id'];
      this.id = id
      this.getProductById();
    });

  }

  countM() {
    this.countValue -= 1


  }
  countP() {
    this.countValue += 1

  }
  getProductById() {
    this._user.getProductById(this.id).subscribe(response => {
      let res: any = response
      if (res.succeeded) {
        this.product = res.data
        console.log(this.product);
        
      }
    }, error => {
      console.log("error while fetching  product", error);
    })
  }
}
