import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  totalOrderPrice:number =0;
  selectedCatId:number =0;
  products: IProduct[];
  categories:ICategory[];
  constructor() {
    this.products = [
      {
        id: 10,
        name: 'phone1',
        price: 5000,
        quantity: 5,
        categoryId: 1,
      },
      {
        id: 20,
        name: 'phone2',
        price: 6000,
        quantity: 5,
        categoryId: 1,
      },
      {
        id: 30,
        name: 'Laptop1',
        price: 30000,
        quantity: 3,
        categoryId: 2,
      },
      {
        id: 40,
        name: 'Laptop2',
        price: 110000,
        quantity: 4,   
        categoryId: 2,
      },
      {
        id: 50,
        name: 'tablet1',
        price: 5000,
        quantity: 2,
        categoryId: 3,
      },
      {
        id: 600,
        name: 'tablet2',
        price: 7000,
        quantity: 2,
        categoryId: 3,
      },
    ];

    this.categories=[
      {
        id:1,
        name:"Mobiles"
      },
      {
        id:2,
        name:"Laptops"
      },
      {
        id:3,
        name:'Tablets'
      }
    ]
  }
  buyProduct(product: IProduct): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
}



