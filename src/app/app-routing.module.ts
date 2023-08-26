import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductsListComponent } from './pages/products-list/products-list.component'
import { ProductComponent } from './pages/product/product.component'

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
