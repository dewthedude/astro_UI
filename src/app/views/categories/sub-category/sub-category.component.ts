import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {
  constructor(private formBuilder: FormBuilder, private _packageService: PackageService, private _toaster: ToastrService) {
    this.categoryForm = this.formBuilder.group({

      categoryId: ['', [
        Validators.required,
        // Validators.maxLength(40),
        Validators.nullValidator,
      ]],
      subcategory: ['', [
        Validators.required,
        Validators.maxLength(40),
        Validators.nullValidator,
      ]],
      description: ''
    });
  }
  categoryForm: any;
  isDisable: boolean = false
  categoryDropdown: any;
  subCategoryList: any;
  isLoading = false;

  ngOnInit(): void {
    this.getCategoryDropdown();
    this.getSubCategory();
  }
  onSubmit(): void {
    let formData = this.categoryForm.value;

    if (this.categoryForm.invalid) {
      return;
    }
    this._packageService.addSubCategory(formData).subscribe(res => {
      let result: any = res;
      if (result.succeeded) {
        this._toaster.success(result.message, "Success")
        this.getCategoryDropdown()
        this.getSubCategory();
      }
      else {
        this.isDisable = false;
      }
    }, (e => {
      let error = e.error;
      // this._toast.error(error.message)
      this.isDisable = false;
    }));
    this.categoryForm.reset();
  }
  getCategoryDropdown(): void {
    this.isLoading = true
    this._packageService.getCategoryDropdown().subscribe(res => {
      let result: any = res;
      if (result.succeeded) {
        this.categoryDropdown = result.data
      }
      else {
      }
      this.isLoading = false
    }, (e => {
      this.isLoading = false
      let error = e.error
      console.log(error);
    }));
  }

  getSubCategory(): void {
    this.isLoading = true
    this._packageService.getSubCategory().subscribe(res => {
      let result: any = res;
      if (result != null) {
        this.subCategoryList = result.data
      }
      this.isLoading = false
    }, (e => {
      this.isLoading = false
      let error = e.error
      console.log(error);
    }));
  }

  deleteSubCategory(id: any) {
    this.isLoading = true
    this._packageService.deleteSubCategory(id).subscribe(res => {
      let result: any = res;
      this._toaster.success(result.message, "Success")
      this.isLoading = false
    }, (e => {
      this.isLoading = false
      let error = e.error
      console.log(error);
    }));
  }
  activateSubCategory(id: any) {
    this.isLoading = true

    this._packageService.activateSubCategory(id).subscribe(res => {

      let result: any = res;
      this._toaster.success(result.message, "Success")
      this.getSubCategory();
      this.isLoading = false
    }, (e => {
      this.isLoading = false
      let error = e.error
      console.log(error);

    }));
  }
}
