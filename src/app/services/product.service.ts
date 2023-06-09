import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  getCategoryList() {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Product/activecategory`);
  }

  getSubCategoryList(id: any) {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Product/${id}/activesubcategory`);
  }

  /*add new custom form*/
  addProduct(data: FormData) {

    // formData.append('description', Data.address)
    return this.http.post(`${environment.AppConfig.URLs.AstroAPI}/api/Product`, data)
  }
  getAllPrdouct(){
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Product/products`);
  }
  getProductById(id:any)
  {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Product/${id}/product`);
  }

  activateProduct(id:any)
  {
    debugger
    return this.http.patch(`${environment.AppConfig.URLs.AstroAPI}/api/Product/${id}/product`,id);
  }
  deleteProduct(id :any)
  {
    return this.http.delete(`${environment.AppConfig.URLs.AstroAPI}/api/Product/${id}/remove`,id)
  }
}
