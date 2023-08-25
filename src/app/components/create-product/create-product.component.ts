import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
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
    if(this.form.touched) {
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
    console.log('this.form.errors', this.form)
  }
}
