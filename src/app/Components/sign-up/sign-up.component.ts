import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { ApiUsersService } from '../../../Services/api-users.service';
import { Iuser } from '../../../Models/iuser';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  newUser:Iuser= {} as Iuser;



  constructor(private _ApiUsersService :ApiUsersService,
              private _router:Router

  ) {

  }

newuserId!:number;

  ngOnInit(): void {
    this._ApiUsersService.getLengthId().subscribe({
     next:(res)=>{
       this.newuserId =res.length;
     }
    })



 }
 SignUp() {
  // Log the user data or process it as required

  this.newUser.id = this.newuserId+1;

  this._ApiUsersService.SignUp(this.newUser).subscribe({
    next: () => {
      // SweetAlert on success


      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your account has been created.',
        toast: true, // This makes the alert appear as a toast
        position: 'top-end', // Positioning at the top-right corner
        showConfirmButton: false, // Hides the confirm button
        timer: 2000, // Closes automatically after 2 seconds
        timerProgressBar: true, // Shows a progress bar for the timer
        background: '#f0f9f0', // Light green background to match the success
        iconColor: '#28a745', // Success green color for the icon
        color: '#000', // Text color
      });

      // clear to Inputs in fileds
      this.newUser = {} as Iuser;
      // changes to path at "/Products"
      this._router.navigateByUrl(`/Products`);


    },
    error: (error) => {
      // SweetAlert on error
            Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'ERROR!  Please try again.',
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                });
    }
  });
}



}
