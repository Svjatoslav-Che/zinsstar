import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../../../models/api/offer.model';
import { Country } from "../../../../models/api/country.model";
import { Bank } from "../../../../models/api/bank.class";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {
  @Input('offer') private offer$: Offer;
  @Input('bank') private bank$: Bank;
  @Input('country') private country$: Country;

  constructor() {
  }

  get offer(): Offer {
    return this.offer$;
  }

  get bank(): Bank {
    return this.bank$;
  }

  get country(): Country {
    return this.country$;
  }

  monthYear(duration: number | any): string {
    if (this.offer.is_overnight) {
      return 'Täglich verfügbar';
    } else {
      if (duration < 12) {
        return `${duration} Monat`;
      }
      if (duration < 12) {
        return `${duration} Monate`;
      }
      if (duration > 12) {
        return `${duration / 12} Jahre`;
      } else {
        return `${duration / 12} Jahr`;
      }
    }

  }
  get zinsgutschrift() {
    //  TODO Make calculations later
    if (this.offer.is_overnight) {
      return 'Am Ende der Laufzeit';
    } else {
      return 'Am Ende der Laufzeit';
    }
  }
  ngOnInit(): void {
  }
}
