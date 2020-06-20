import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from 'src/app/service/product/product.service';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListProductsComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
