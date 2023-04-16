import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from 'src/app/services/package.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],


})
export class PlanComponent {

  constructor(private route: ActivatedRoute, private _packageService: PackageService) { }
  categoryId: any;
  plans: any;
  ngOnInit() {

    this.route.params.subscribe(params => {

      this.categoryId = params['id'];
      this.getPackages()
    });

  }


  getPackages() {
    this._packageService.getPackages(this.categoryId).subscribe(res => {
      let result: any = res;
      if (result.succeeded) {
        this.plans = result.data
        console.log(this.plans);
        // manipulate the element's contents as needed
      }
    }, (e => {

      let error = e.error
      console.log(error);
    }));
  }
}
