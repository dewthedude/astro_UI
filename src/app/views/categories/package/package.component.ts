import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  categoryDropdown : any;
  isDisable :boolean =false;
  packageList :any;
  constructor(private formBuilder: FormBuilder, private _packageService: PackageService) { }

  checkoutForm = this.formBuilder.group({

    categoryId: '',
    subcategory: ''
  });

  ngOnInit(): void {
    this.getCategoryDropdown();
    // this.getSubCategory();
  }


  getCategoryDropdown(): void {
    
    this._packageService.getCategoryDropdown().subscribe(res => {
      
      let result: any = res;
      if (result.succeeded) {
        this.categoryDropdown = result.data
      }
      else {
      }
    }, (e => {
      
      let error = e.error
      console.log(error);
    }));
  }
  selectedOption(){
    let formData = this.checkoutForm.value;
    
    this._packageService.getPackages(formData.categoryId).subscribe(res => {
    
      let result: any = res;
      if (result.succeeded) {
      this.getCategoryDropdown()
        this.packageList = result.data;

      }
      else {
        this.isDisable = false;
      }
    }, (e => {
      
      let error = e.error;
      // this._toast.error(error.message)
      this.isDisable = false;
    }));
    this.checkoutForm.reset();
  }
}
