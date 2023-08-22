import { Component } from '@angular/core'
import { ErrorService } from 'src/app/services/error.service'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  constructor(public ErrorService: ErrorService) {}
}
