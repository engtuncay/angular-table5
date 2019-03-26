import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'fimodal-wrapper',
  templateUrl: './fimodal-wrapper.component.html',
  styleUrls: ['./fimodal-wrapper.component.css']
})
export class FimodalWrapperComponent implements OnInit {

  @Input() title = ``;
  //@Input() fiModal = {};
  @ViewChild('modalContent') content

  // ,public modalService: NgbModal
  constructor(public activeModal: NgbActiveModal) {}  // public activeModal: NgbActiveModal

  ngOnInit() {
    // this.modalService.open(this.content).result.then((result) => {
    //   //this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  closeModal(){
    //console.log(this.fiModal);
    console.log(this.activeModal);
    //this.activeModal.dismiss('Cross click');
    //this.fiModal.dismiss('Cross click');
    this.activeModal.dismiss('Cross Click');
    //modal.dismiss('Cross click')
  }

}
