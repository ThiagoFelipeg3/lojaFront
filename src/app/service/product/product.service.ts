import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/model/product';
import { Pagination } from 'src/app/model/pagination';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Pagination<ProductService>>(`${environment.apiHost}/products`);
  }
}
