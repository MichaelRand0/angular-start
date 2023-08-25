import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  currentModal = ''

  close() {
    this.currentModal = ''
  }

  open(modal: string) {
    this.currentModal = modal
  }
}
