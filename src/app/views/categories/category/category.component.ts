import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PackageService } from '../../../services/package.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private formBuilder: FormBuilder, private _packageService: PackageService, private _toaster: ToastrService) {

    this.categoryForm = this.formBuilder.group({
      categoryName: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.nullValidator,
      ]],
      description: ''
    });
  }
  isDisable: boolean = false
  categoryForm: any;
  categoryList: any;
  isLoading = false;
  editForm = {
    category: "",
    icon: ""
  };
  ngOnInit(): void {
    this.getCategory();
  }
  onSubmit(): void {

    let formData = this.categoryForm.value;
    if (this.categoryForm.invalid) {
      return;
    }

    this._packageService.addCategory(formData).subscribe(res => {
      let result: any = res;
      if (result.succeeded) {

        this._toaster.success(result.message, "Success")

        this.getCategory();
      }
      else {
        this.isDisable = false;
      }
    }, (e => {

      let error = e.error;
      // alert(error.message)
      this._toaster.error(error.message, "Error.!")
      this.isDisable = false;
    }));
    this.categoryForm.reset();
  }
  getCategory() {
    debugger
    this.isLoading = true
    this._packageService.getCategory().subscribe(res => {

      let result: any = res;
      if (result != null) {
        if (result.succeeded) {
          this.categoryList = result.data
        }
        else {
        }


      }
      this.isLoading = false
    }, (e => {
      debugger
      this.isLoading = false
      let error = e.error
      console.log(error);
    }));
  }
  activateCategory(action: any) {
    this.isLoading = true
    this._packageService.activateCategory(action).subscribe(res => {
      let result: any = res;
      this._toaster.success(result.message, "Success")
      this.getCategory();
      this.isLoading = false
    }, (e => {
      this.isLoading = false
      let error = e.error
      console.log(error);

    }));
  }
  deleteCategory(action: any) {

    this._packageService.deleteCategory(action).subscribe(res => {

      let result: any = res;


      this._toaster.success(result.message, "Success")
    }, (e => {

      let error = e.error
      console.log(error);
    }));
  }
  editCategory(catId: any) {
    this._packageService.getCategorybyId(catId).subscribe(res => {

      let result: any = res;

      this.editForm = result.data

      if (this.editForm != null) {

      }


    }, (e => {

      let error = e.error
      console.log(error);
    }));
  }

}
