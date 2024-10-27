import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../../Services/api-products.service';
import { Iproduct } from '../../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {


      productForm!:Iproduct;


  constructor(private _ApiProductsService:ApiProductsService,
              private router:Router

  ){}
  ngOnInit(): void {

      this.productForm = this._ApiProductsService.StartedEditProduct;


  }
  EndUpDate(){
    console.log(this.productForm.title);

    this._ApiProductsService.EndUpDate(this.productForm.id,this.productForm).subscribe({
      next:()=>{

        Swal.fire({
          title: 'UpDate!',
          text: 'The item was UpDated successfully.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Great!'
        });
        this.router.navigateByUrl(`/Products`);


      }
    });


  }





}
