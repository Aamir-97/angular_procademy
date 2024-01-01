import { Component } from '@angular/core';
import { ProductListService } from '../Services/product-list.service';
import { Products } from '../Models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers: [ProductListService]
})
export class ProductsComponent {

  constructor(private productService: ProductListService, private router: Router) {

  }
  mostPricedProduct: any;

  ngOnInit() {
    this.products = this.productService.getAllProducts();
    this.mostPricedProduct = this.getMostPricedProducts();

  }

  products: Array<Products> = [];


  getMostPricedProducts() {
    let productsCopy = [...this.products];
    return productsCopy.sort((current, next) => next.price - current.price)[0];
  }

  getTotalProducts() {
    return this.products.length
  }

  getAvailableProducts() {
    return this.products.filter(products => products.available === 'Available').length;
  }

  getNotAvailable() {
    return this.products.filter(products => products.available === 'Not Available').length;
  }

  selectedProductsFilter: string = 'all';
  searchValueData: string = '';

  onFilterRadioButonChanged(data: string) {
    this.selectedProductsFilter = data;
    console.log(this.selectedProductsFilter);

  }

  onSearchValueChanged(searchData: string) {
    this.searchValueData = searchData;
    // console.log(searchData);
  }

  // GotoProductDetails(id: number){
  //   this.router.navigate(['products/product-details/'])
  // }

}
