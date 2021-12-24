import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilterOption} from 'src/app/shared/models/filter-options.class';
import {OfferService} from 'src/app/shared/services/offer.service';

@Component({
  selector: 'app-not-overrnight-offers',
  templateUrl: './not-overrnight-offers.component.html',
  styleUrls: ['./not-overrnight-offers.component.scss']
})
export class NotOverrnightOffersComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private offerService: OfferService,
    private fb: FormBuilder
  ) {

  }

  get duration() {
    return this.offerService.duration;
  }

  set duration(duration) {
    this.offerService.duration = duration;
  }

  get options() {
    return this.offerService.filterOptions;
  }

  get amount() {
    return this.formGroup.get('amount').value.replace(/\D/g, '').replace(/^0+/, '');
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
        amount: ["€50,000"]
      }
    )

  }

  getCount(count: FilterOption): number {
    return count.count.tagsgeld;
  }

}
