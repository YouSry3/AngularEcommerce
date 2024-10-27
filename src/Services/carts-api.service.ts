import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icard } from '../Models/icard';

@Injectable({
  providedIn: 'root'
})
export class CartsApiService {


  constructor(private HttpClient:HttpClient) { }



  getAllCarts():Observable<Icard[]>{
    return this.HttpClient.get<Icard[]>(`http://localhost:3000/Cart`);
    
  }
}
