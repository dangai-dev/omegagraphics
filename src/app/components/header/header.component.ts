import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../../layout/modal/modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbModal]
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openLogin() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.title = 'Já tenho cadastro';
  }

  ngOnInit() {
  }

}
