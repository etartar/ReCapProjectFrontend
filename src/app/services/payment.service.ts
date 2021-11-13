import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl:string = "https://localhost:5001/api/payments/";

  constructor(private httpClient:HttpClient) { }

  pay(creditCard:CreditCard): Observable<SingleResponseModel<CreditCard>> {
    let url = this.apiUrl + 'makepayment';
    return this.httpClient.post<SingleResponseModel<CreditCard>>(url, creditCard);
  }
}
