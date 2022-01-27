import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute} from '@angular/router';
import {ToolsUtils} from "../../../utils/tools.utils";
import {ToastrService} from "ngx-toastr";
import {Bank} from "../../../shared/models/api/bank.class";
import {BankService} from "../../../shared/services/bank.service";
import {CountryService} from "../../../shared/services/country.service";
import {Country, CountryCode} from "../../../shared/models/api/country.model";
import {MatTableDataSource} from "@angular/material/table";
import {Offer} from "../../../shared/models/api/offer.model";

@Component({
  selector: 'app-bank-create',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.scss']
})
export class CreateBankComponent implements OnInit {
  public isUpdating: boolean = false;
  public formatDate = ToolsUtils.formatDate;
  public getImageUrl = ToolsUtils.getImageUrl;
  public bankId: number;
  public bank: Bank = {
    uid: '',
    permalink: '',
    name: '',
    description: '',
    logo: 'grenke-bank.png',
    insurance_name: '',
    insurance_description: '',
    country_code: CountryCode.DEU,
  };
  public countries: Country[];
  public offersDataSource: MatTableDataSource<Offer>;
  private offers: Offer[];

  constructor(
    private toastr: ToastrService,
    private admin: AdminService,
    private activatedRoute: ActivatedRoute,
    private bankService: BankService,
    private countryService: CountryService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.getCountries();
    });
  }

  private getCountries(): void {
    this.countryService.countriesSubject.subscribe(countries => {
      if (!countries) return;
      this.countries = countries;
    });
  }


  public save(): void {
    this.isUpdating = true;

    this.bankService.create(this.bank).subscribe((res) => {
      console.log(res);
      this.toastr.success('bank created!', 'success');
      this.ngOnInit();
      this.isUpdating = false;
      this.bankId = res.id;

    }, error =>{
      console.log(error);
      this.toastr.error(error.message, 'failed');
      this.isUpdating = false;
    });
  }

  private updateOffersTable(offers: Offer[]): void {
    this.offers = offers;
    this.offersDataSource = new MatTableDataSource(offers);
  }
}
