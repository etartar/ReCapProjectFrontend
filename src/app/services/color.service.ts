import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl:string = "https://localhost:5001/api/colors/";

  constructor(private httpClient:HttpClient) { }

  getColors() : Observable<ListResponseModel<Color>> {
    let url = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Color>>(url);
  }

  getColorById(id:number): Observable<SingleResponseModel<Color>> {
    let url = this.apiUrl + "getbyid/" + id;
    return this.httpClient.get<SingleResponseModel<Color>>(url);
  }

  addColor(color:Color) : Observable<ResponseModel> {
    let url = this.apiUrl + 'create';
    return this.httpClient.post<ResponseModel>(url, color);
  }

  updateColor(id:number, color:Color): Observable<ResponseModel> {
    let url = this.apiUrl + "update/" + id;
    return this.httpClient.put<ResponseModel>(url, color);
  }

  deleteColor(id:number): Observable<ResponseModel> {
    let url = this.apiUrl + "delete/" + id;
    return this.httpClient.delete<ResponseModel>(url);
  }
}
