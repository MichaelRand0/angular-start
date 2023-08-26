import { Component, OnInit } from '@angular/core'
import { ProductsService } from './services/products.service'
import { ErrorService } from './services/error.service'
import { ModalService } from './services/modal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Angular'
  loading = true
  search=''
  constructor(public productsService: ProductsService, public ErrorService: ErrorService, public modalService: ModalService) {}

  ngOnInit(): void {
    this.productsService
      .getProductsAll()
      .subscribe(() => this.loading = false)
  }
}
