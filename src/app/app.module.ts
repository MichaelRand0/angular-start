import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductComponent } from './components/product/product.component'
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsListComponent } from './pages/products-list/products-list.component'

@NgModule({
  declarations: [AppComponent, ProductComponent, ErrorComponent, SearchFilterPipe, ModalComponent, CreateProductComponent, FocusDirective, StopPropagationDirective, NavigationComponent, ProductsListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
