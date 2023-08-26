import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalService } from 'src/app/services/modal.service'
import { ProductsService } from 'src/app/services/products.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  constructor(public productService: ProductsService, public modalService: ModalService) {}
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  })
  private get error() {
    const controls = Object.values(this.form.controls)
    const control = controls.filter((control) => control.errors)[0]
    const errors = Object.keys(control?.errors ?? {})
    return errors
  }
  get errorMessage() {
    const error = this.error[0]
    if (this.form.touched) {
      switch (error) {
        case 'required':
          return 'Обязательное поле'
        case 'minlength':
          return `Минимум символов: 6`

        default:
          return ''
      }
    }
    return ''
  }
  onSubmit() {
    this.form.markAsTouched()
    if (!this.form.controls.title.errors) {
      this.productService.createProduct({
        title: this.form.controls.title.value ?? '',
        id: new Date().getMilliseconds(),
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 3,
          count: 10,
        },
      }).subscribe(() => {
        this.modalService.close()
      })
    }
  }
}
