import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from '../../../models/api/offer.model';
import {Bank} from '../../../models/api/bank.class';
import {Country} from '../../../models/api/country.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input('amount') amount: number;
  @Input('festgeld') isOvernight: boolean;
  @Input('private') private_: boolean = false;
  offerCountryTT: string =
    'Die Länderbewertung von Standard & Poor’s ist eine Einschätzung der Kreditwürdigkeit eines Landes. Sie basiert auf einer Analyse der Effektivität der Institutionen, Regierungsführung, wirtschaftlichen Struktur, Wachstumsaussichten, externen Finanzen sowie der steuerlichen und monetären Flexibilität.';
  intrestTT: string =
    'Je nach Angebot und Berechnungsmethode der Bank kann der errechnete Zinsertrag vom tatsächlich zur Anwendung kommenden Zinsertrag abweichen.';
  bonusTT: string =
    'Die einmalige Prämie gilt ausschließlich für Neukunden und bei Abschluss des ersten ZinsUnion Produkts.';
  selectedTab = 0;
  @Input('offer') private offer$: Offer;
  @Input('bank') private bank$: Bank;
  @Input('country') private country$: Country;

  @Output()
  public onOfferSelected = new EventEmitter();

  constructor(private router: Router) {
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

  get bonus(): string {
    if (!this.amount || Number(this.amount) < 9999) {
      return '25';
    }
    if (Number(this.amount) >= 10000 && Number(this.amount) < 39999) {
      return '50';
    }
    if (Number(this.amount) >= 40000 && Number(this.amount) < 74999) {
      return '75';
    }
    if (Number(this.amount) >= 75000) {
      return '270';
    }
  }

  get calculatedProfits() {
    if (!this.amount) {
      return 0;
    }
    return (this.offer.interest_rate * this.amount) / 100;
  }

  ngOnInit(): void {
  }

  order() {
    console.log('order', this.offer.oid);
    this.onOfferSelected.emit(this.offer.oid);
    // this.router.navigate(['/dashboard/DepositProducts'], {
    //   queryParams: {order: this.offer.oid},
    // });
  }

  selectTab(tabIndex: number): void {
    if (this.selectedTab === tabIndex) {
      this.selectedTab = 0;
    } else {
      this.selectedTab = tabIndex;
    }
  }

  monthYear(duration: number): string {
    if (duration < 12) {
      return `${duration} Monate`;
    }
    if (duration > 12) {
      return `${duration / 12} Jahre`;
    } else {
      return `${duration / 12} Jahr`;
    }
  }

  replaceDot(value: number) {
    return String(value).replace('.', ',');
  }
}
