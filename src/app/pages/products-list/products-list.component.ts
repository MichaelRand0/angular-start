import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  title = 'Angular'
  loading = this.productsService.products.length === 0
  search=''
  constructor(public productsService: ProductsService, public ErrorService: ErrorService, public modalService: ModalService) {}

  ngOnInit(): void {
    this.productsService
      .getProductsAll()
      .subscribe(() => this.loading = false)
  }
}
