import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService  {

  constructor(private HttpClient:HttpClient) { }




  getApiProducts():Observable<Iproduct[]>{
    return this.HttpClient.get<Iproduct[]>(`http://localhost:3000/Products`) ;
  }
  getApiProductById(Id:number):Observable<Iproduct>{
    

    return this.HttpClient.get<Iproduct>(`http://localhost:3000/Products?id=${Id}`);

  }

}
