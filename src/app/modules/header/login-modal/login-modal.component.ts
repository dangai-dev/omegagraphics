import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModal]
})
export class LoginModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router) { }

  openLogin() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.title = 'Login';
  }

  ngOnInit() {
  }

}
