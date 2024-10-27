import { Component, OnInit } from '@angular/core';
import { CartsApiService } from '../../../Services/carts-api.service';
import { Icard } from '../../../Models/icard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit {

    carts!:Icard[];
    TotalSeal !:number


  constructor(private _CartsApiService:CartsApiService){}
  ngOnInit(): void {
    this._CartsApiService.getAllCarts().subscribe({
      next:(res)=>{
        this.carts = res;
      }
    })
     this.TotalSeal = 0;


    }

    getAllPrice(){
      for (let index = 0; index < this.carts.length; index++) {
          this.TotalSeal = this.TotalSeal + this.carts[index].price;

      }
    return this.TotalSeal;
  }

}


