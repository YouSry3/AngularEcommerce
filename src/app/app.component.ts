import { Component } from '@angular/core';
import {NgModule} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { MainComponent } from "./Components/main/main.component";
import { ProductsComponent } from "./Components/products/products.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet, HeaderComponent, MainComponent, ProductsComponent,RouterModule,CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectEcomerce';
}
