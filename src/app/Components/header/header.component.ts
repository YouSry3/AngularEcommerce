import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiUsersService } from '../../../Services/api-users.service';
import { ApiCartsService } from '../../../Services/api-carts.service';
import { Icard } from '../../../Models/icard';
import { CommonModule } from '@angular/common';
import { AuthUser } from '../../../Models/auth-user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isAthanction!:boolean;
  Carts!:number;
  dropdownVisible:Boolean =false ;
  user !:AuthUser;






  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }


  constructor(private _Authanction:ApiUsersService,
              private _API_ApiCartsService:ApiCartsService
   ){}
  ngOnInit(): void {
    this._Authanction.getAuthSubject().subscribe({
      next:(status)=>{

        this.isAthanction = status;
      }
    })
    this.dropdownVisible = false;
    this.user ={

      email: localStorage.getItem("TokenA")?`${localStorage.getItem("TokenA")}`:`${localStorage.getItem("TokenE")}`,
    }








    this._API_ApiCartsService.getCurrentCart().subscribe({
      next:(UPdateCards)=>{

        this.Carts =UPdateCards;
      }
     })
  }

  logout(){
    this._Authanction.Logout();

  }

}
