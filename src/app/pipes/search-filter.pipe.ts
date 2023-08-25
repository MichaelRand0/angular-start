import { Pipe, PipeTransform } from '@angular/core'
import { IProduct } from '../models/Product'

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(products: IProduct[], value: string): IProduct[] {
    return products.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
  }
}
