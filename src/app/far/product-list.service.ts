import { Injectable } from '@angular/core';
import { Products } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  products: Array<Products> = [
    { id: 1, name: 'MInimalists Analog Watch', price: 109, color: 'Black', available: 'Available', image: '../../assets/images/watch.jpg' },
    // { id: 1, name: 'Duplicate MInimalists Analog Watch', price: 999, color: 'Colorless', available: 'Available', image: '' },
    { id: 2, name: 'Hisense Ultra HD Smart TV', price: 3339, color: 'Black', available: 'Available', image: '../../assets/images/tv.png' },
    { id: 3, name: 'APPLE iPhone 12', price: 1855, color: 'Black', available: 'Not Available', image: '../../assets/images/iphone.jpg' },
    { id: 4, name: 'LG Fully Automatic Washing Machine', price: 1765, color: 'White', available: 'Available', image: '../../assets/images/washingMashine.jpg' },
    { id: 5, name: 'LG Refrigerator with Door Cooling', price: 2815, color: 'White', available: 'Not Available', image: '../../assets/images/fridge.jpeg' },
  ]

  getAllProducts(){
    return this.products;
  }

  getProductById(id: number){
    return this.products.find(x => x.id === id);
  }

  getPreviousProductById(currentId: number){
    const productIndex = this.products.findIndex((p) => {
      p.id === currentId
    });
    if(productIndex != 0){
      return this.products.at(productIndex-1);
    } else {
      return this.products.at(0);
    }
    
  }

  getNextProductById(currentId: number){
    const productIndex = this.products.findIndex((p) => {
      p.id === currentId
    });
    if(productIndex != this.products.length){
      return this.products.at(productIndex+1);
    } else {
      return this.products.at(this.products.length);
    }
    
  }
}
