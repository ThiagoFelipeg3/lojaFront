import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { Pagination } from 'src/app/model/pagination';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';
import { ProductModule } from '../product.module';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (paginationProducts: Pagination<Product>) => {
        this.products = paginationProducts.data;
      }
    );
  }

}
