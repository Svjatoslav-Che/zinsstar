import { Bank } from '../../../../models/api/bank.class';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-insurance',
  templateUrl: './offer-insurance.component.html',
  styleUrls: ['./offer-insurance.component.scss']
})
export class OfferInsuranceComponent implements OnInit {
  @Input('bank') private bank$: Bank;
  constructor() {
  }

  ngOnInit(): void {
  }
  get bank() {
    return this.bank$;
  }
}
