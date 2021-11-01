import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

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
}
