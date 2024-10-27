import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Iuser } from '../../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { ApiUsersService } from '../../../Services/api-users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userReSearch:Iuser = {} as Iuser;
  constructor(private _ApiUsersService:ApiUsersService,
              private _router:Router
  ){}

  Login() {
    console.log('Form Submitted!', this.userReSearch);

    this._ApiUsersService.getUserByEmail(this.userReSearch).subscribe({
      next: (res: Iuser[]) => {  // Assuming res is an array of users

        // Check if the array is empty
        if (res.length == 0) {
          // SweetAlert for empty array (error)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email or Password is incorrect. Please try again.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        } else {

          // SweetAlert for successful login

          this._ApiUsersService.Login(res);
          this._router.navigateByUrl(`/Products`);

          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Login successful!',
            toast: true, // This makes the alert appear as a toast
            position: 'top-end', // Positioning at the top-right corner
            showConfirmButton: false, // Hides the confirm button
            timer: 2000, // Closes automatically after 2 seconds
            timerProgressBar: true, // Shows a progress bar for the timer
            background: '#f0f9f0', // Light green background to match the success
            iconColor: '#28a745', // Success green color for the icon
            color: '#000', // Text color
          });

          // Optionally navigate to another page after successful login
          // this._router.navigateByUrl(`/Products`);
        }

        // Reset user Inputs Forms
        this.userReSearch = {} as Iuser;
      }

    });
  }

}
