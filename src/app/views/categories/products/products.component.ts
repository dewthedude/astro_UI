import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service'
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, finalize, throwError } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private _modalService: NgbModal, private formBuilder: FormBuilder, private _productService: ProductService, private _toaster: ToastrService) {

    this.productForm = this.formBuilder.group({
      categoryId: ['', [Validators.required, Validators.nullValidator,]],
      subCategoryId: ['', [Validators.required, Validators.nullValidator,]],
      productName: ['', [Validators.required, Validators.maxLength(50), Validators.nullValidator,]],
      qty: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.nullValidator,]],
      discount: ['', [Validators.required, Validators.maxLength(2), Validators.pattern(/^\d+$/), Validators.nullValidator,]],
      price: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.nullValidator,]],
      description: ['', [Validators.required, Validators.maxLength(2000), Validators.nullValidator,]],
      discountedPrice: [],

    });
  }
  isDisable: boolean = false
  price: number | undefined;
  discount: number | undefined;
  discountedPrice: number | undefined;
  productForm: any;
  imageSrc = '';
  isLoading = false;
  imagePreview = {
    id: 0,
    name: ''
  };
  img2 = {
    id: 0,
    name: ''
  };
  img3 = {
    id: 0,
    name: ''
  };
  img4 = {
    id: 0,
    name: ''
  };
  sellersPermitFile: any;
  DriversLicenseFile: any;
  InteriorPicFile: any;
  ExteriorPicFile: any;
  //base64s
  coverImageString: string = ''
  image2: string = ''
  image3: string = ''
  Disabled = false;
  image4: string = ''
  //json
  finalJson = {};
  currentId: number = 0;
  productImages: { id: number, image: any }[] = [];

  image: any;

  //APIs variable
  categoryList: any;
  subCategoryList: any;
  productsList: any;
  categoryId: any;
  productDetails: any;

  //Converting images to Base64
  // addPictures() {
  //   this.finalJson = {
  //     "sellersPermitFile": this.coverImageString,
  //     "DriversLicenseFile": this.image2,
  //     "InteriorPicFile": this.image3,
  //     "ExteriorPicFile": this.image4
  //   }
  // }
  ngOnInit(): void {
    this.getActiveCategory();
    this.getAllProducts();
  }
  public picked(event: any, field: any) {

    this.currentId = field;
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[0];

      if (field == 1) {
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
      }
      else if (field == 2) {
        this.DriversLicenseFile = file;
        this.handleInputChange(file); //turn into base64
      }
      else if (field == 3) {
        this.InteriorPicFile = file;
        this.handleInputChange(file); //turn into base64
      }
      else if (field == 4) {
        this.ExteriorPicFile = file;
        this.handleInputChange(file); //turn into base64

      }
    }
    else {
      // alert("No file selected");
      this._toaster.error("No file selected", "Error")
    }
  }
  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      // alert('invalid format');
      this._toaster.error("invalid file format try  '.jpg .png. jpeg'", "Error")
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    let id = this.currentId;
    switch (id) {
      case 1:
        this.coverImageString = base64result;
        let index = this.productImages.findIndex(x => x.id === id);
        if (index !== -1) {
          let replaceImage = {
            id: id,
            image: this.coverImageString
          }
          this.productImages[index] = replaceImage;
        }
        else {
          this.productImages.push({ id: id, image: this.coverImageString });
        }

        break;
      case 2:
        this.image2 = base64result;
        let index2 = this.productImages.findIndex(x => x.id === id);
        if (index2 !== -1) {
          let replaceImage = {
            id: id,
            image: this.image2
          }
          this.productImages[index2] = replaceImage;
        }
        else {
          this.productImages.push({ id: id, image: this.image2 });
        }
        break;
      case 3:
        this.image3 = base64result;
        let index3 = this.productImages.findIndex(x => x.id === id);
        if (index3 !== -1) {
          let replaceImage = {
            id: id,
            image: this.image3
          }
          this.productImages[index3] = replaceImage;
        }
        else {
          this.productImages.push({ id: id, image: this.image3 });
        }
        break;
      case 4:
        this.image4 = base64result;
        let index4 = this.productImages.findIndex(x => x.id === id);
        if (index4 !== -1) {
          let replaceImage = {
            id: id,
            image: this.image4
          }
          this.productImages[index4] = replaceImage;
        }
        else {
          this.productImages.push({ id: id, image: this.image4 });
          break;
        }

    }
    // this.log();
  }

  //Displaying image at tab
  displayProduct(event: any, id: number) {
    const file: File = event.target.files[0];
    var pattern = /image-*/;
    if (!file.type.match(pattern)) {
      return;
    }
    const displayReader = new FileReader();
    displayReader.readAsDataURL(file);
    displayReader.onload = () => {
      const img = displayReader.result as string;

      if (id == 1) {
        this.imagePreview.name = img;
        this.imagePreview.id = id;
      }
      else if (id == 2) {
        this.img2.name = img;
        this.img2.id = id;
      }
      else if (id == 3) {
        this.img3.name = img;
        this.img3.id = id;
      }
      else if (id == 4) {
        this.img4.name = img;
        this.img4.id = id;
      }

    };

  }
  calculateDiscount() {

    if (this.price != undefined && this.discount != undefined) {
      this.discountedPrice = this.price - ((this.price * this.discount) / 100);
    }
    else {
      this.discountedPrice = this.price
    }
  }
  productSubmit(): void {
    this.isLoading = true
    this.Disabled = true
    let formValue = this.productForm.value;
    if (this.productForm.invalid) {
      this.Disabled = false;
      this.isLoading = false;
      return;
    }
    let formData = new FormData()


    formData.append('categoryid', formValue.categoryId)
    if (this.discountedPrice != undefined || this.discountedPrice != null) {
      formData.append('discountedPrice', this.discountedPrice.toString())
    }
    formData.append('description', formValue.description)
    formData.append('discount', formValue.discount)
    formData.append('price', formValue.price)
    formData.append('productname', formValue.productName)
    formData.append('qty', formValue.qty)
    formData.append('subCategoryId', formValue.subCategoryId)
    formData.append('coverImage', this.coverImageString)
    formData.append('img2', this.image2)
    formData.append('img3', this.image3)
    formData.append('img4', this.image4)



    this._productService.addProduct(formData).subscribe(res => {

      let result: any = res;
      ;
      if (result.succeeded) {
        this._toaster.success(result.message, "Success")
        this.getAllProducts();
        this.getActiveCategory();
        this.getSubActiveCategory("xyz");
      }
      else {
        this.isDisable = false;
      }
      this.isLoading = false
      this.Disabled = false
    }, (e => {
      this.isLoading = false
      this.Disabled = false
      let error = e.error;
      debugger
      // alert(error.message)
      this._toaster.error(error.message, "Error.!")
      this.isDisable = false;
      
    }));
    debugger
    this.productForm.reset();
    this.imagePreview = {
      id: 0,
      name: ''
    };
    this.img2 = {
      id: 0,
      name: ''
    };
    this.img3 = {
      id: 0,
      name: ''
    };
    this.img4 = {
      id: 0,
      name: ''
    };
  
  }
  getActiveCategory() {
    this.isLoading = true
    this._productService.getCategoryList().subscribe(res => {
      let result: any = res;
      if (result.succeeded) {
        this.categoryList = result.data
        this.isLoading = false
      }
      else {
      }
    }, (e => {
      this.isLoading = false
      let error = e.error
      console.log(error);
    }));
  }
  getSubActiveCategory(event: any) {
    debugger
    this.isLoading = true
    this.subCategoryList = [];
    const id = event.target.value;
    this._productService.getSubCategoryList(id).subscribe(res => {
      let result: any = res;
      if (result != null) {
        this.subCategoryList = result.data
      }
      this.isLoading = false
    }, (e => {
      this.isLoading = false
      let error = e.error
      // console.log(error);
    }));

  }
  getAllProducts() {
    this.isLoading = true;
    this._productService.getAllPrdouct().subscribe(res => {
      let result: any = res;
      if (result != null) {
        this.productsList = result.data

      }
      this.isLoading = false
    }, (e => {
      this.isLoading = false
      let error = e.error
      console.log(error);
    }));
  }
  getProductById(id: any) {
    this._productService.getProductById(id).subscribe(res => {
      let result: any = res;
      debugger
      if (result.succeeded) {
        this.productDetails = result.data
        console.log(this.productDetails);
        this.image = this.productDetails.images[0].image;
        alert(this.image);
      }
      else {
      }
    }, (e => {
      let error = e.error
      console.log(error);
    }));
  }

  activateProduct(id: any) {
    debugger
    this._productService.activateProduct(id).pipe(
      catchError((error) => {
        debugger
        console.log(error);
        return throwError(error);
      }),
      finalize(() => {
        // Cleanup code here
      })
    ).subscribe((result: any) => {
      debugger
      if (result.succeeded) {
        this.productDetails = result.data;
        console.log(this.productDetails);
        this.image = this.productDetails.images[0].image;
        alert(this.image);
      }
    });

  }
  editProduct(id: any) {
  }
  deleteProduct(id: any) {
  }
  viewProduct(content: any, id: any) {
    this.getProductById(id);
    this._modalService.open(content,
      {
        size: 'xl',
        backdrop: 'static',
        backdropClass: "light-blue-backdrop"
      });
  }
  closeModal() {
    this._modalService.dismissAll()
  }
}




