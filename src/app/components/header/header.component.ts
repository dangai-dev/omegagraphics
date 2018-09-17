import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../../layout/modal/modal.component';
import { ModalAboutComponent } from '../../layout/modal-about/modal-about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbModal]
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(ModalAboutComponent);
    modalRef.componentInstance.title = 'About';
  }

  ngOnInit() {
  }

}
