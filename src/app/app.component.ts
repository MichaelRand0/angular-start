import { Component } from '@angular/core'
import products from './data/products'
import { IProduct } from './models/Product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular'
  products: IProduct[] = products
}
