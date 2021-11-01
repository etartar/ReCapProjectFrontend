import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl:string = "https://localhost:5001/api/customers/";

  constructor(private httpClient:HttpClient) { }

  getCustomers() : Observable<ListResponseModel<Customer>> {
    let url = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Customer>>(url);
  }
}
