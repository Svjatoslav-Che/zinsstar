import {Component, Input, OnInit} from '@angular/core';
import {Bank} from 'src/app/shared/models/api/bank.class';
import {Country} from 'src/app/shared/models/api/country.model';

@Component({
  selector: 'app-bank-item',
  templateUrl: './bank-item.component.html',
  styleUrls: ['./bank-item.component.scss']
})
export class BankItemComponent implements OnInit {
  tooltipData =
    'Die Länderbewertung von Standard &amp; Poor’s ist eine Einschätzung der Kreditwürdigkeit eines Landes. Sie basiert auf einer Analyse der' +
    ' Effektivität der Institutionen, Regierungsführung, wirtschaftlichen Struktur,  Wachstumsaussichten, externen Finanzen sowie der steuerlichen und monetären Flexibilität.';
  @Input('bank') private bank$: Bank;
  @Input('country') private country$: Country;

  constructor(
    // private sharedService:     SharedService
  ) {
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
