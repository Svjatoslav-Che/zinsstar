import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from 'src/app/shared/models/api/bank.class';
import { Country } from 'src/app/shared/models/api/country.model';
import { Offer } from '../../../models/api/offer.model';
import { FilterOption } from '../../../models/filter-options.class';

import { SortType } from '../../../models/sort.class';
import { OfferService } from "../../../services/offer.service";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  @Input('festgeld') isOvernight: boolean;
  @Input('private') private_: boolean;

  @Input('amount') amount: number;
  private sortType$: SortType = null;

  @Output()
  public onOfferSelected = new EventEmitter();
  constructor(private service: OfferService) {
  }

  public onOfferSelectedFunc(event) {
    this.onOfferSelected.emit(event);
  }

  get sortType() {
    return this.sortType$;
  }

  get duration(): FilterOption {
    return this.service.duration;
  }

  set duration(d: FilterOption) {
    this.service.duration = d;
  }

  get offers(): Observable<Offer[]> {
    return this.service.getOffers(this.isOvernight);
  }

  get filterOptions(): FilterOption[] {
    return this.service.filterOptions;
  }

  ngOnInit(): void {
  }

  sortBy(ev: any) {
    this.sortType$ = ev;
  }

  sortByLand(offers: Offer[]) {
    return offers;
  }

  getCountry(offer: Offer): Country {
    return this.service.getOfferCountry(offer);
  }

  getBank(offer: Offer): Bank {
    return this.service.getOfferBank(offer);
  }
}
