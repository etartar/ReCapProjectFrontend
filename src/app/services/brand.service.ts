import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

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
}
