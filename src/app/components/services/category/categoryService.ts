import { Injectable } from '@angular/core';
import { Category } from '../../types/category';
import { categories } from '../../sampledata/categories.data';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
constructor(){

}

getAllcategories(): Category[]{
  return categories;
}


}
