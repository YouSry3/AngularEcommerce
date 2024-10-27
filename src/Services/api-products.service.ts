import { HttpClient } from '@angular/common/http';
import { Injectable, input, OnInit } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService  {

  constructor(private HttpClient:HttpClient) { }

    StartedEditProduct!:Iproduct;



  getApiProducts():Observable<Iproduct[]>{
    return this.HttpClient.get<Iproduct[]>(`http://localhost:3000/Products`) ;
  }
  getApiProductById(Id:number):Observable<Iproduct>{


    return this.HttpClient.get<Iproduct>(`http://localhost:3000/Products?id=${Id}`);

  }

  deleteItem(id: number): Observable<void> {
    return this.HttpClient.delete<void>(`http://localhost:3000/Products/${id}`);
  }
  startedUpDate( product:Iproduct ){
    this.StartedEditProduct= product;
    console.log(`startedUpDate in apiproduct Service ${this.StartedEditProduct.price}`);

    return this.StartedEditProduct;

  }
  EndUpDate(id: number, updatedData: Iproduct): Observable<void> {
    return this.HttpClient.put<void>(`http://localhost:3000/Products/${id}`, updatedData);
  }
}
