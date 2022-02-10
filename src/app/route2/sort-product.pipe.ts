import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from './filter.enum';
import { IProduct } from './product-data';

@Pipe({
  name: 'sortProduct',
})
export class SortProductPipe implements PipeTransform {
  transform(products: IProduct[], sortType: FilterType): IProduct[] {
    console.log(sortType);
    let func;
    if (sortType === FilterType.ASC) {
      func = (a: IProduct, b: IProduct) => +a.price - +b.price;
    }
    if (sortType === FilterType.DESC) {
      func = (a: IProduct, b: IProduct) => +b.price - +a.price;
    }
    return products.sort(func);
  }
}
