import { Component } from '@angular/core';
import { ProductService } from '../services/products/products';
import { ProductListItem } from '../types/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './productscomponent.html',
  styleUrl: './productscomponent.css',
  providers:[ProductService],
})
export class Productscomponent {
     
  products:ProductListItem[]=[];

  constructor(productservice:ProductService){
    this.products=productservice.getproducts();
  }
}
