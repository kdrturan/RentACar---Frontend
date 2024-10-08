import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44387/api/cars/"
  constructor(private htttpClient:HttpClient) { }


  getCars(url:string):Observable<ListResponseModel<Car>>{
    return this.htttpClient.get<ListResponseModel<Car>>(this.apiUrl+url)
  }
}
