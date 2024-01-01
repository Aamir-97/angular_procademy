import { Component } from '@angular/core';
import { Products } from '../Models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../Services/product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId: number;
  p: Products;

  productName: string;


  onEditMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductListService, private router: Router){}


  ngOnInit(): void {
    /* It is not a good practice to implement a route
    because it's define in the ngOnInit function. It will not re render the page when we navigate from the
    same component
    */
        
    // this.productId =  parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    // // this.productId =  parseInt(this.activatedRoute.snapshot.params['id']!);
    // this.p = this.productService.getProductById(this.productId)!;

    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId =  parseInt(params.get('id')!);
      this.p = this.productService.getProductById(this.productId)!;
    })

    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      this.onEditMode = Boolean(queryParams.get('edit'))
    })


  }

  previousProduct(currentProductId: number){
    this.p = this.productService.getPreviousProductById(currentProductId)!;

  }

  nextProduct(currentProductId: number){
    this.p = this.productService.getNextProductById(currentProductId)!;
  }

  changeEditMode(){
    this.onEditMode = true;
  }

  onSave(){
    this.onEditMode = false;
    this.router.navigate(['/products/product-details', this.p.id]);
  }

  appendQuaryParam(){
    this.router.navigate(['/products/product-details', this.p.id], {queryParams: {edit: true}});
  }
}
