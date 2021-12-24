import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../../shared/services/offer.service";
import {FilterOption} from "../../../shared/models/filter-options.class";

@Component({
  selector: 'app-overnight-offers',
  templateUrl: './overnight-offers.component.html',
  styleUrls: ['./overnight-offers.component.scss'],
})
export class OvernightOffersComponent implements OnInit {
  private amount$: Number = 5000;

  constructor(
    private offerService: OfferService,

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
    return this.amount$;
  }

  set amount(amount) {
    try {
      this.amount$ = Number(amount);
    } catch (e) {
    }
  }

  ngOnInit(): void {
    this.offerService.duration = this.offerService.filterOptions[0];
  }

  getCount(count: FilterOption): number {
    return count.count.festgeld;
  }
}
