import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute} from '@angular/router';
import {ToolsUtils} from "../../../utils/tools.utils";
import {ToastrService} from "ngx-toastr";
import {Bank} from "../../../shared/models/api/bank.class";
import {BankService} from "../../../shared/services/bank.service";
import {CountryService} from "../../../shared/services/country.service";
import {Country} from "../../../shared/models/api/country.model";
import {MatTableDataSource} from "@angular/material/table";
import {Offer} from "../../../shared/models/api/offer.model";
import {OfferService} from "../../../shared/services/offer.service";
import {Currency} from "../../../shared/models/api/currency.enum";

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  public isUpdating: boolean = false;
  public formatDate = ToolsUtils.formatDate;
  public getImageUrl = ToolsUtils.getImageUrl;
  public bank: Bank;
  public countries: Country[];
  public offersDataSource: MatTableDataSource<Offer>;
  public displayedColumns = ["id", "is_overnight", "min_deposit", "max_deposit", "duration", "interest_rate", "currency", "action"];
  private offers: Offer[];

  constructor(
    private toastr: ToastrService,
    private admin: AdminService,
    private activatedRoute: ActivatedRoute,
    private bankService: BankService,
    private countryService: CountryService,
    private offerService: OfferService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.getBanks(res.id);
      this.getCountries();
    });
  }

  private getBanks(id: string): void {
    this.bankService.fetchBanks().subscribe(banks => {
      if (!banks) return;

      this.bank = banks.find((entity) => entity.id === +id)
      this.updateOffersTable(this.bank.offers);
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

    this.bankService.update(this.bank).subscribe((res) => {
      this.toastr.success('bank data updated!', 'success');
      this.ngOnInit();
      this.isUpdating = false;
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

  public updateOffer(offer: Offer): void {
    offer.isUpdating = true;
    this.offerService.update(offer).subscribe((res) => {
      this.toastr.success('offer data updated!', 'success');
      this.ngOnInit();
    }, error =>{
      console.log(error);
      this.toastr.error(error.message, 'failed');
      offer.isUpdating = false;
    });
  }

  public createOffer(offer: Offer): void {
    offer.isUpdating = true;
    this.offerService.create({...offer, bankId: this.bank.id }).subscribe((res) => {
      this.toastr.success('offer data updated!', 'success');
      this.ngOnInit();
    }, error =>{
      console.log(error);
      this.toastr.error(error.message, 'failed');
      offer.isUpdating = false;
    })
  }

  public deleteOffer(offer: Offer): void {
    offer.isUpdating = true;
    this.offerService.delete(offer.id).subscribe((res) => {
      this.toastr.success('offer data updated!', 'success');
      this.ngOnInit();
    }, error =>{
      console.log(error);
      this.toastr.error(error.message, 'failed');
      offer.isUpdating = false;
    });
  }

  public addOffer(): void {
    this.offers.push({
      oid: '',
      is_overnight: true,
      min_deposit: 5000,
      max_deposit: 100000,
      duration: 1,
      is_foreign_currency: false,
      interest_rate: 1.1,
      currency: Currency.EUR,
      bank_id: this.bank.id,
      isNew: true,
    });
    this.updateOffersTable(this.offers);
  }
}
