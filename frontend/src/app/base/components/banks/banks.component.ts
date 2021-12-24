import {Component, OnInit} from '@angular/core';
import {Bank} from 'src/app/shared/models/api/bank.class';
import {Country} from 'src/app/shared/models/api/country.model';
import {BankFilter} from 'src/app/shared/models/filter-options.class';
import {BankService} from 'src/app/shared/services/bank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {


  constructor(private bankService: BankService) {

  }

  get banks() {
    return this.bankService.banks;
  }

  ngOnInit(): void {
  }

  filter(v: BankFilter): void {
    this.bankService.filterBanks(v);
  }

  getBankCountry(bank: Bank): Country {
    return this.bankService.getCountry(bank);
  }
}
