import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl:string = "https://localhost:5001/api/brands/";

  constructor(private httpClient:HttpClient) { }

  getBrands() : Observable<ListResponseModel<Brand>> {
    let url = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Brand>>(url);
  }

  getBrandById(id:number): Observable<SingleResponseModel<Brand>> {
    let url = this.apiUrl + "getbyid/" + id;
    return this.httpClient.get<SingleResponseModel<Brand>>(url);
  }

  addBrand(brand:Brand) : Observable<ResponseModel> {
    let url = this.apiUrl + 'create';
    return this.httpClient.post<ResponseModel>(url, brand);
  }

  updateBrand(id:number, brand:Brand): Observable<ResponseModel> {
    let url = this.apiUrl + "update/" + id;
    return this.httpClient.put<ResponseModel>(url, brand);
  }

  deleteBrand(id:number): Observable<ResponseModel> {
    let url = this.apiUrl + "delete/" + id;
    return this.httpClient.delete<ResponseModel>(url);
  }
}
