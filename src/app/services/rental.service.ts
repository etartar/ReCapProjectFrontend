import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckIsCarRentalable } from '../models/checkIsCarRentalable';
import { CreateRental } from '../models/createRental';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl:string = "https://localhost:5001/api/rentals/";

  constructor(private httpClient:HttpClient) { }

  getRentals() : Observable<ListResponseModel<Rental>> {
    let url = this.apiUrl + "getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rental>>(url);
  }

  checkIsCarRental(checkIsCarRentalable:CheckIsCarRentalable): Observable<ResponseModel> {
    let url = this.apiUrl + "checkiscarrentalable";
    return this.httpClient.post<ResponseModel>(url, checkIsCarRentalable);
  }

  addRental(createRental:CreateRental): Observable<ResponseModel> {
    let url = this.apiUrl + "create";
    return this.httpClient.post<ResponseModel>(url, createRental);
  }
}
