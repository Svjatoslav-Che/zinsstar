import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilterOption} from '../../../models/filter-options.class';
import {OrderType, SortType} from '../../../models/sort.class';
import {OfferService} from "../../../services/offer.service";

@Component({
  selector: 'app-offer-filter',
  templateUrl: './offer-filter.component.html',
  styleUrls: ['./offer-filter.component.scss']
})
export class OfferFilterComponent implements OnInit {
  formGroup: FormGroup;

  @Input('private') private_: boolean;
  @Input('festgeld') isOvernight: boolean;
  @Output('amount') amountEE: EventEmitter<string> = new EventEmitter();
  @Input('place') tagesgeld: string = 'tagesgeld';

  constructor(private service: OfferService,
              private fb: FormBuilder
  ) {
  }

  get amountClass() {
    if (this.tagesgeld === 'tagesgeld') {
      return 'text-center';

    } else {
      return 'text-start';
    }
  }

  get amount() {
    return this.formGroup.get('amount').value.replace(/\D/g, '').replace(/^0+/, '');
  }

  get sort() {
    return SortType;
  }

  get orderType() {
    return this.service.orderType;
  }

  get sortType() {
    return this.service.sortType;
  }

  get filterOptions(): FilterOption[] {
    return this.service.filterOptions;
  }

  get duration(): FilterOption {
    return this.service.duration;
  }

  set duration(duration: FilterOption) {
    this.service.duration = duration;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
        amount: ["€50,000"]
      }
    )
    this.formGroup.valueChanges.subscribe(() => {
      this.amountEE.emit(this.amount)
    })
  }

  getCount(count: FilterOption): number {
    if (this.isOvernight) {
      return count.count.festgeld;
    } else {
      return count.count.tagsgeld;
    }
  }

  getIconText(type: SortType): string {
    if (type === this.sortType) {
      switch (this.orderType) {
        case OrderType.none:
          return 'fa-sort';
        case OrderType.ase:
          return 'fa-sort-asc';
        case OrderType.decs:
          return 'fa-sort-desc';
      }
    } else {
      return 'fa-sort';
    }
  }

  switchOrder(sort: SortType): void {
    // if (!this.isOvernight && sort === SortType.Duration)
    this.service.sortType = sort;
  }

}
