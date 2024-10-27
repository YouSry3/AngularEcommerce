import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../../Services/api-products.service';
import { Iproduct } from '../../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ApiCartsService } from '../../../Services/api-carts.service';
// import swal from 'sweetalert';
import { ApiUsersService } from '../../../Services/api-users.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:Iproduct[] = [] as Iproduct[];
   productCurrentAdd:Iproduct = {} as Iproduct;




  constructor(private _ApiProductsService:ApiProductsService,
              private _ApiCartsService:ApiCartsService,
              private _ApiUsersService:ApiUsersService,
              private router:Router

  ) {}


    ngOnInit(): void {
      this._ApiProductsService.getApiProducts().subscribe({
       next:(res)=>{

         this.products =res;
       }
      })
}
  AddToCart1(product:Iproduct){

            if(  this._ApiUsersService.IsAuthancation()){

              this._ApiCartsService.API_AddToCart(product).subscribe({
                next:()=>{
                          Swal.fire({
                      icon: 'success',
                      title: 'Success!',
                      text: 'Add To Cart successful!',
                      toast: true, // This makes the alert appear as a toast
                      position: 'top-end', // Positioning at the top-right corner
                      showConfirmButton: false, // Hides the confirm button
                      timer: 2000, // Closes automatically after 2 seconds
                      timerProgressBar: true, // Shows a progress bar for the timer
                      background: '#f0f9f0', // Light green background to match the success
                      iconColor: '#28a745', // Success green color for the icon
                      color: '#000', // Text color
                    });
                }
              })
            }else{
              swal("You Can`t Do It!", "Must SignIn before Add Product!", "error");
              this.router.navigateByUrl(`/Login`);

            }

}
Delete(Id:number):void{

  this._ApiProductsService.deleteItem(Id).subscribe({
    next: () => {


      Swal.fire({
        title: 'Delete!',
        text: 'The item was Deleted successfully.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Great!'
      });
      this._ApiProductsService.getApiProducts().subscribe({
        next:(res)=>{

          this.products =res;
        }
       })
    },
    error: (err) => {

              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'ERROR Add Product on Cart Please try again.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });
    }
  });
}

startupDate(product:Iproduct){
    this._ApiProductsService.startedUpDate(product);
    console.log(`StartupDate in product TS ${product}`);

}

IsAdmin():boolean{
  return this._ApiUsersService.DoYouAdmin();

}


// AddToCart(productId:number){

//    this._ApiProductsService.getApiProductById(productId).subscribe({
//     next:(res)=>{
//       this.productCurrentAdd = res;
//     }
//    })
//   console.log(`AddToCart in product.ts ${this.productCurrentAdd}`);
//   this._API_Carts.API_AddToCart(this.productCurrentAdd).subscribe({

//     next:() =>{


//                   // Alert Successfull in Cart
//         Swal.fire({
//           icon: 'success',
//           title: 'Success!',
//           text: 'Add To Cart successful!',
//           toast: true, // This makes the alert appear as a toast
//           position: 'top-end', // Positioning at the top-right corner
//           showConfirmButton: false, // Hides the confirm button
//           timer: 2000, // Closes automatically after 2 seconds
//           timerProgressBar: true, // Shows a progress bar for the timer
//           background: '#f0f9f0', // Light green background to match the success
//           iconColor: '#28a745', // Success green color for the icon
//           color: '#000', // Text color
//         });
//     },
//     error: (error)=>{
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'ERROR Add Product on Cart Please try again.',
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//       });
//     }
//   })



// }
}
