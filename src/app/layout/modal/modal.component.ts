import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  @Input() title = 'Modal';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
