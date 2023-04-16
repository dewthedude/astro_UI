
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {

  constructor(private formBuilder: FormBuilder, private _packageService: PackageService, private _toaster: ToastrService) { }

  isDisable: boolean = false
  subCategoryDropdown: any;
  categoryFeaturesList: any;


  // checkoutForm = this.formBuilder.group({
  //   subCategoryId: '',
  //   name: '',
  //   price: '',
  //   discount: ''
  // });



  // ngOnInit(): void {
  //   this.getSubCategoryDropdown();
  //   this.getCategoryFeature();
  // }
  // onSubmit(): void {
    
  //   let formData = this.checkoutForm.value;
  //   console.log(formData);

  //   this._packageService.addCategoryFeature(formData).subscribe(res => {

  //     let result: any = res;
  //     if (result.succeeded) {

  //       this._toaster.success(result.message, "Success")
  //       this.getSubCategoryDropdown()
  //       this.getCategoryFeature();
  //     }
  //     else {
  //       this.isDisable = false;
  //     }
  //   }, (e => {

  //     let error = e.error;
  //     // this._toast.error(error.message)
  //     this.isDisable = false;
  //   }));
  //   this.checkoutForm.reset();
  // }
  // getSubCategoryDropdown(): void {

  //   this._packageService.getSubCategoryDropdown().subscribe(res => {

  //     let result: any = res;
  //     if (result.succeeded) {
  //       this.subCategoryDropdown = result.data
  //     }
  //     else {
  //     }
  //   }, (e => {

  //     let error = e.error
  //     console.log(error);
  //   }));
  // }
  // getCategoryFeature(): void {

  //   this._packageService.getCategoryFeature().subscribe(res => {

  //     let result: any = res;
  //     if (result.succeeded) {
        
  //       this.categoryFeaturesList = result.data
  //     }
  //     else {
  //     }
  //   }, (e => {

  //     let error = e.error
  //     console.log(error);
  //   }));
  // }

  // activateFeature(id: any) {
    
  //   this._packageService.activateFeature(id).subscribe(res => {

  //     let result: any = res;
  //     this._toaster.success(result.message, "Success")
  //     this.getCategoryFeature();
  //   }, (e => {

  //     let error = e.error
  //     console.log(error);

  //   }));
  // }

}
