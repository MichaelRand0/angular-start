import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IProduct } from '../models/Product'
import { Observable, catchError, delay, tap, throwError } from 'rxjs'
import { ErrorService } from './error.service'

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient, public errorService: ErrorService) {}

  products: IProduct[] = []

  getProductsAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: {
            limit: 4,
          },
        }),
      })
      .pipe(
        delay(2000),
        catchError(this.handleError.bind(this)),
        tap((products) => {
          this.products = products
        })
      )
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(tap((newProduct) => this.products.push(newProduct)))
  }

  private handleError(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error)
  }
}
