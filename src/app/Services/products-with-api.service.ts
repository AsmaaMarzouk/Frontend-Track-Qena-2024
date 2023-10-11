import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpclient: HttpClient) { }
  // getAllProducts():Observable<Iproduct[]>{
  //   return this.httpclient.get<Iproduct[]>("http://localhost:3000/products");
  // }

  // getProductByID(prdID:number):Observable<Iproduct>{

  //   return this.httpclient.get<Iproduct>(`http://localhost:3000/products/${prdID}`);
  // }

  // searchByPrdMaterial(matValue:string):Observable<Iproduct[]>{
  //   return this.httpclient.get<Iproduct[]>(`http://localhost:3000/products?Material=${matValue}`);
  // }

  getAllProducts():Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);
  }

  getProductByID(prdID:number):Observable<Iproduct>{

    return this.httpclient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`);
  }

  searchByPrdMaterial(matValue:string):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products?Material=${matValue}`);
  }
}
