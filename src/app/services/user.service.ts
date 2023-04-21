import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  getProducts() {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/User/products`);
  }
  getProductById(id: any) {
    return this.http.get(`${environment.AppConfig.URLs.AstroAPI}/api/User/${id}/product`)
  }
}
