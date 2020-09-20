import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/model/product';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.translate.use(event.lang);
      }
    )
  }

}
