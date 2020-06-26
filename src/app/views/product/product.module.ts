import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from 'src/app/service/product/product.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListProductsComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
