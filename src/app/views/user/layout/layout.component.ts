import { Component, ViewChild } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
import { Router } from '@angular/router';
import { PlanComponent } from '../plan/plan.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [PlanComponent]
})

export class LayoutComponent {

  constructor(private _packageService: PackageService, private route: Router, private plan: PlanComponent) { }
  navMenu: any;
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(): void {
    this._packageService.getCategoryDropdown().subscribe(res => {
      let result: any = res;
      if (result.succeeded) {
        this.navMenu = result.data
        console.log(this.navMenu);

      }
      else {
      }
    }, (e => {

      let error = e.error
      console.log(error);
    }));

  }
  navigate(id: any) {
    
    this.route.navigate(['user/plan', id]);
    // this.plan.getPackages(id);



  }
}
