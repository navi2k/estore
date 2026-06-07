import { Injectable } from '@angular/core';
import { products } from '../../sampledata/products.data';
import { ProductListItem } from '../../types/products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  
  
  getproducts(): ProductListItem[]{
     return products;
  }

  
  




}
