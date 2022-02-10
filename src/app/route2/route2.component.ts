import { Component, OnInit } from '@angular/core';
import { FilterType } from './filter.enum';
import { IProduct, productWorld } from './product-data';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
})
export class Route2Component implements OnInit {
  isGridView = false;
  filterType = FilterType.ASC;
  productGallery: IProduct[] = productWorld;
  get productViewCss() {
    return {
      grid: this.isGridView,
      list: !this.isGridView,
    };
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.productGallery.length);
  }

  listView() {
    this.isGridView = false;
  }

  gridView() {
    this.isGridView = true;
  }

  onPriceFilter(e: any) {
    this.filterType = e.target.value;
  }
}
