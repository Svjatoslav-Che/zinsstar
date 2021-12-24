import {Component, Input, OnInit} from '@angular/core';
import {faMinusSquare as FaMinusSquare, faPlusSquare as FaPlusSquare} from '@fortawesome/free-regular-svg-icons'
import {FilterStatus} from '../model/filter-status.enum';
import {UserOffer} from "../../../services/dashboard.service";

@Component({
  selector: 'investment-template',
  templateUrl: './investment-template.component.html',
  styleUrls: ['./investment-template.component.scss']
})
export class InvestmentTemplateComponent implements OnInit {

  expanded: boolean = false;
  faPlusSquare = FaPlusSquare;
  faMinusSquare = FaMinusSquare;
  @Input('applications') private applications$: UserOffer[] = [];
  @Input('title') private title$: string = '';
  @Input('type') private type$: FilterStatus = FilterStatus.PENDING;

  constructor() {
  }

  get applications(): UserOffer[] {
    return this.applications$;
  }

  get totalInvestments() {
    let sum = 0;
    if (this.applications) {
      this.applications.forEach(offer => sum += offer.amount)
    }
    return sum;
  }

  get title() {
    return this.title$;
  }

  get type() {
    return this.type$;
  }

  get color(): string {
    switch (this.type) {
      case FilterStatus.PENDING:
        return 'text-warning';
      case FilterStatus.APPROVED:
      case FilterStatus.RECEIVED:
        return 'text-info';
      case FilterStatus.IN_PROGRESS:
        return 'text-success';
    }
  }

  ngOnInit(): void {
  }
}
