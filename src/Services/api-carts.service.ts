import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { BehaviorSubject, Observable } from 'rxjs';
import { Icard } from '../Models/icard';

@Injectable({
  providedIn: 'root'
})
export class ApiCartsService implements OnInit {

  private cartSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  Cards!: Icard[] ;

  constructor(private http: HttpClient) {

        this.Cards = [] as Icard[];

  }

  ngOnInit(): void {

  }



  API_AddToCart(product: Iproduct) {
    console.log(`API_AddToCart ${product}`);

    // this.Cards.push(...this.Cards,product);




    this.Cards.push(product);
    this.cartSubject.next(this.Cards.length);
    return this.http.post(`http://localhost:3000/Cart`, product);
  }

  getAllCarts(): Observable<Icard[]> {
    return this.http.get<Icard[]>(`http://localhost:3000/Cart`);
  }

  getCartById(): Observable<Icard[]> {
    return this.http.get<Icard[]>(`http://localhost:3000/Cart?id=${localStorage.getItem(`TokenId`)}`);
  }
  getCurrentCart(): BehaviorSubject<number> {
    return this.cartSubject;
  }

}
