import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductItemComponent } from './product-item/product-item.component';



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
  ]
})
export class ProductModule { }
