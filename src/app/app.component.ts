import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/Product'
import { ProductsService } from './services/products.service'
import { Observable, tap } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Angular'
  products$: Observable<IProduct[]>
  loading = true
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService
      .getProductsAll()
      .pipe(tap(() => (this.loading = false)))
  }
}
