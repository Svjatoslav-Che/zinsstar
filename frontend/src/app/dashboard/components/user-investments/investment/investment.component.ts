import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  DashboardService,
  UserOffer,
} from 'src/app/dashboard/services/dashboard.service';
import { Bank } from 'src/app/shared/models/api/bank.class';
import { Country } from 'src/app/shared/models/api/country.model';
import { Offer } from 'src/app/shared/models/api/offer.model';
import { OfferService } from 'src/app/shared/services/offer.service';
import { FilterStatus } from '../model/filter-status.enum';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
})
export class InvestmentComponent implements OnInit {
  details: boolean = false;
  revokeRequest: boolean = false;
  revokeRequestOngoing: boolean = false;
  x: FilterStatus;
  @Input('investment') private investment$: UserOffer;

  constructor(
    private offerService: OfferService,
    private dbService: DashboardService,
    private modalService: NgbModal
  ) {}

  get userVerified() {
    return this.dbService.userVerified;
  }

  get investment(): UserOffer {
    return this.investment$;
  }

  get offer(): Offer {
    return this.investment.offer;
  }

  get verified() {
    return this.dbService.verified;
  }

  get bank(): Bank {
    return this.offerService.getOfferBank(this.offer);
  }

  get country(): Country {
    return this.offerService.getOfferCountry(this.offer);
  }

  get logo(): string {
    return this.bank
      ? this.bank.logo
        ? `assets/banks/${this.bank.logo}`
        : ''
      : '';
  }

  get status() {
    return FilterStatus;
  }

  ngOnInit(): void {}

  openVerticallyCentered(content) {
    console.log('open')
    this.modalService.open(content, { centered: true });
  }

  revoke() {
    this.revokeRequest = true;
    this.revokeRequestOngoing = true;
    this.dbService.revokeOffer(this.investment).subscribe((res) => {
      try {
        this.modalService.dismissAll();
      } catch (e) {}
      this.revokeRequest = false;
      this.revokeRequestOngoing = false;
    });
  }
}
