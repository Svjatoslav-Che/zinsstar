import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BankFilter} from 'src/app/shared/models/filter-options.class';

@Component({
  selector: 'app-bank-filter',
  templateUrl: './bank-filter.component.html',
  styleUrls: ['./bank-filter.component.scss']
})
export class BankFilterComponent implements OnInit {
  @Output('filterBy') searchEnabled: EventEmitter<BankFilter> = new EventEmitter();

  filterBy: BankFilter = BankFilter.NAME_A_Z;

  constructor() {
  }

  get filter() {
    return BankFilter;
  }

  ngOnInit(): void {
  }

  searchValue() {
    this.searchEnabled.emit(this.filterBy);
  }

}
