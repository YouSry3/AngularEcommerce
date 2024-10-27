import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../Models/iuser';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  AuthSubject:BehaviorSubject<boolean>;

  constructor(private _HttpClient:HttpClient) {
     if(this.IsAuthancation()){
      this.AuthSubject = new BehaviorSubject<boolean>(true);

     }else{

       this.AuthSubject = new BehaviorSubject<boolean>(false);
     }

  }
  

  SignUp(user:Iuser){
    return this._HttpClient.post(`http://localhost:3000/Users`,user)
  }

  getLengthId():Observable<Iuser[]>{
    return this._HttpClient.get<Iuser[]>(`http://localhost:3000/Users`)
  }

  getUserByEmail(user:Iuser):Observable<Iuser[]>{
    return this._HttpClient.get<Iuser[]>(`http://localhost:3000/Users?Email=${user.Email}`);

  }

  Login(user:Iuser[]):void{
    if(user[0].Email == "admin@admin.com"){
      console.log(`Admin of Application`);

      localStorage.setItem("TokenA",user[0].Email);

      this.AuthSubject.next(true);


    }else{
      console.log(`login in Api user ${user}`);

          localStorage.setItem("TokenE",user[0].Email);

          localStorage.setItem("TokenId",`${user[0].id}` )
          this.AuthSubject.next(true);

    }

  };
  DoYouAdmin():boolean{


    return localStorage.getItem("TokenA")?true:false;


  }
  Logout():void{
    if(!localStorage.getItem("TokenA")){

      localStorage.removeItem("TokenE");
      localStorage.removeItem("TokenId");
    }else{
      localStorage.removeItem("TokenA");
      localStorage.removeItem("TokenId");
    }

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'LogOut successful!',
      toast: true, // This makes the alert appear as a toast
      position: 'top-end', // Positioning at the top-right corner
      showConfirmButton: false, // Hides the confirm button
      timer: 2000, // Closes automatically after 2 seconds
      timerProgressBar: true, // Shows a progress bar for the timer
      background: '#f0f9f0', // Light green background to match the success
      iconColor: '#28a745', // Success green color for the icon
      color: '#000', // Text color
    });
    this.AuthSubject.next(false);

  }
  IsAuthancation():boolean{
      if(!localStorage.getItem("TokenA")){

        return localStorage.getItem("TokenE")? true:false;
      }else{
        return true;
      }
  }
  getAuthSubject():BehaviorSubject<boolean>{
    return this.AuthSubject;
  }


}

