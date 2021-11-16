import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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

  getCarsByColorId(colorId:number) : Observable<ListResponseModel<Car>> {
    let url = this.apiUrl + "getallbycolorid/" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(url);
  }

  getCarById(id:number) : Observable<SingleResponseModel<CarDetail>> {
    let url = this.apiUrl + "getbyid/" + id;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(url);
  }

  getCarDetailById(id:number) : Observable<SingleResponseModel<Car>> {
    let url = this.apiUrl + "getcardetailbyid/" + id;
    return this.httpClient.get<SingleResponseModel<Car>>(url);
  }

  addCar(car:Car) : Observable<ResponseModel> {
    let url = this.apiUrl + 'create';
    return this.httpClient.post<ResponseModel>(url, car);
  }

  updateCar(id:number, car:Car): Observable<ResponseModel> {
    let url = this.apiUrl + "update/" + id;
    return this.httpClient.put<ResponseModel>(url, car);
  }

  deleteCar(id:number): Observable<ResponseModel> {
    let url = this.apiUrl + "delete/" + id;
    return this.httpClient.delete<ResponseModel>(url);
  }
}
