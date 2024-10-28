import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../Models/iproduct';
import { ApiProductsService } from '../../../Services/api-products.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { IproductSender } from '../../../Models/iproduct-sender';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  productForm  = {} as Iproduct ;
  newProdictId!:number;
  productSender = {} as IproductSender;

  constructor(private _ApiProductsService:ApiProductsService,
              private router:Router
  ){}

  ngOnInit(): void {
    this._ApiProductsService.getLengthId().subscribe({
     next:(res)=>{
       this.newProdictId =res.length;
     }
    })



 }

  Addproduct(){
    this.newProdictId = this.newProdictId + 1;

    this.productSender = {
      ...this.productForm,
      id:this.newProdictId.toString()
    }

    this._ApiProductsService.AddApiNewProduct(this.productSender).subscribe({
      next:()=>{
        console.log(`Addproduct ${this.productForm}`);

        Swal.fire({
          title: 'Success!',
          text: 'The operation was completed successfully.',
          icon: 'success',
          timer: 1000, // المدة بالمللي ثانية (هنا 1000 مللي ثانية تعادل ثانية واحدة)
          showConfirmButton: false // إخفاء زر التأكيد
        });
        this.router.navigateByUrl(`/Products`);

      }
    })

  }

}
