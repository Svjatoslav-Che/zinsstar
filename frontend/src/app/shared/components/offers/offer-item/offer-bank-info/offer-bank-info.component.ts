import {Component, Input, OnInit} from '@angular/core';
import {Bank} from '../../../../models/api/bank.class';
import {Country} from '../../../../models/api/country.model';

@Component({
  selector: 'app-offer-bank-info',
  templateUrl: './offer-bank-info.component.html',
  styleUrls: ['./offer-bank-info.component.scss'],
})
export class OfferBankInfoComponent implements OnInit {
  @Input('bank') private bank$: Bank;
  @Input('country') private country$: Country;

  constructor() {
  }

  get bank(): Bank {
    return this.bank$;
  }

  get country(): Country {
    return this.country$;
  }

  ngOnInit(): void {
  }
}
