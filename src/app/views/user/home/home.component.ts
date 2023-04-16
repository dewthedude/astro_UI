import { Component, ViewChild } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  category: any;
  constructor(private _packageService: PackageService, private router: Router) { }
  navMenu: any;
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(): void {
    this._packageService.getCategoryDropdown().subscribe(res => {
      this.category = res;

    }, (e => {

      let error = e.error
      console.log(error);
    }));

  }
  Navigate() {
    
    if (this.category != null) {
      let planId = this.category.data[0].categoryId;
      this.router.navigate([`/user/plan/${planId}`]);
    }
    this.router.navigate(['/user/plan/caf0bbf8-9c73-4e76-8cec-b65916c34d30']);
   
  }
}
