import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl:string = "https://localhost:5001/api/carimages/";

  constructor(private httpClient:HttpClient) { }

  getImages(id:number) : Observable<ListResponseModel<CarImage>> {
    let url = this.apiUrl + "getall/" + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(url);
  }
}
