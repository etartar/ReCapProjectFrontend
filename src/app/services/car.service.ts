import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string = "https://localhost:5001/api/cars/";

  constructor(private httpClient:HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>> {
    let url = this.apiUrl + "getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(url);
  }

  getCarsByBrandId(brandId:number) : Observable<ListResponseModel<Car>> {
    let url = this.apiUrl + "getallbybrandid/" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(url);
  }
}
