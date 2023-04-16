import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private readonly http: HttpClient) { }

  /*add new custom form*/
  addCategory(Data: any) {

    let formData = new FormData()
    formData.append('name', Data.categoryName)
    formData.append('description', Data.description)

    // formData.append('description', Data.address)
    return this.http.post(`${environment.AppConfig.URLs.AstroAPI}/api/Master/category`, formData)
  }
  updateCategory(Data: any) {

    let formData = new FormData()
    formData.append('name', Data.updateCategory)
    formData.append('icon', Data.updateIcon)
    // formData.append('description', Data.address)
    return this.http.post(`${'https://localhost:7148/api/package'}`, formData)
  }


  addSubCategory(Data: any) {
    let formData = new FormData()
    formData.append('categoryId', Data.categoryId)
    formData.append('name', Data.subcategory)
    formData.append('description', Data.description)
    return this.http.post(`${environment.AppConfig.URLs.AstroAPI}/api/Master/subcategory`, formData)
  }




  addCategoryFeature(Data: any) {

    let formData = new FormData()
    formData.append('subCategoryId', Data.subCategoryId)
    formData.append('name', Data.name)
    formData.append('icon', Data.icon)
    return this.http.post(`${'https://localhost:7148/api/master/categoryfeature'}`, formData)
  }


  getCategory() {

    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Master/category`);
  }

  getCategoryDropdown() {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Product/activecategory`);
  }
  getSubCategoryDropdown() {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Master/subcategory`);
  }

  getSubCategory() {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/Master/subcategory`);
  }

  getCategoryFeature() {
    return this.http.get(`${'https://localhost:7148/api/master/getfeature'}`);
  }

  getPackages(id: any) {

    return this.http.get(`https://localhost:7148/api/package/packagelist?Id=${id}`);
  }
  activateCategory(categoryid: any) {


    return this.http.patch(`${environment.AppConfig.URLs.AstroAPI}/api/Master/${categoryid}/category`, categoryid);
  }
  activateFeature(id: any) {

    return this.http.patch(`https://localhost:7148/api/master/${id}/activatefeature`, id);
  }

  activateSubCategory(categoryid: any) {

    return this.http.patch(`${environment.AppConfig.URLs.AstroAPI}/api/Master/${categoryid}/subcategory`, categoryid);
  }
  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`${environment.AppConfig.URLs.AstroAPI}/api/Master/${id}/category`);
  }
  deleteSubCategory(id: any): Observable<any> {
    return this.http.delete(`${environment.AppConfig.URLs.AstroAPI}/api/Master/${id}/subcategory`);
  }
  getCategorybyId(catId: any): Observable<any> {
    return this.http.get(`https://localhost:7148/api/package/${catId}/categorybyId`)
  }

}
