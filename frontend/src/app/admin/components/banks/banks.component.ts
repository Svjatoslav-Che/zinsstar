import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {BankService} from "../../../shared/services/bank.service";
import {Bank} from "../../../shared/models/api/bank.class";

@Component({
  selector: 'app-admin-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class BanksComponent implements OnInit {
  displayedColumns = ["id", "logo", "name", "uid", "code", "insurance_name", "offers", "action"];
  bankDataSource: MatTableDataSource<Bank>;
  banks: Bank[] = [];

  constructor(
    private bankService: BankService,
  ) {
  }

  ngOnInit() {
    this.bankService.banksSubject.subscribe(banks => {
      if (!banks) return;
      this.updateBankTable(banks);
      this.banks = banks;
    });
  }

  private updateBankTable(banks: Bank[]) {
    this.bankDataSource = new MatTableDataSource(banks);
  }
}
