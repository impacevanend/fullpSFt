import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  productUrl = 'http://localhost:8080/api/v1/'
  constructor(private httpClient: HttpClient) { }

  public getProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productUrl + 'products');
  }

  public getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.productUrl + `product/${id}`);
 
  }

  public getProdcutByName(name: string): Observable<Product>{
    return this.httpClient.get<Product>(this.productUrl + `products/${name}`);
  }

  public createProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.productUrl + 'products', product);
  }

  public updateProduc(id: number,product: Product): Observable<Product>{
    return this.httpClient.put<Product>(this.productUrl + `products/${id}`, product);
  }

  public deleteProductById(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productUrl + `products/${id}`);
  }
}
