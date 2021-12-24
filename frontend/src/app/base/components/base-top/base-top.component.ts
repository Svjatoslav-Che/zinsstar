import {Component, OnInit} from '@angular/core';
import {faChevronRight as FaChevronRight} from '@fortawesome/free-solid-svg-icons'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base-top',
  templateUrl: './base-top.component.html',
  styleUrls: ['./base-top.component.scss']
})
export class BaseTopComponent implements OnInit {
  faChevronRight = FaChevronRight;
  closeResult = '';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {size: 'xl', ariaLabelledBy: 'modal-basic-title'});
  }


}
