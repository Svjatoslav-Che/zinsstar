import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BankDetails} from 'src/app/dashboard/models/bank-details.model';
import {DashboardService, UserOffer,} from 'src/app/dashboard/services/dashboard.service';
import {Bank} from 'src/app/shared/models/api/bank.class';
import {Country} from 'src/app/shared/models/api/country.model';
import {Offer} from 'src/app/shared/models/api/offer.model';
import {OfferApplication} from 'src/app/shared/models/offer-application.class';
import {OfferService} from 'src/app/shared/services/offer.service';
import {environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-deposit-products',
  templateUrl: './deposit-products.component.html',
  styleUrls: ['./deposit-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DepositProductsComponent implements OnInit {
  mask = {

  };
  cb1: boolean = false;
  requestComplete: boolean = false;
  formGroup: FormGroup;
  amountString = '0';
  amountNumber = 0;
  onGoingRequest: boolean = false;
  private userOffer$: UserOffer = null;
  @ViewChild('content', { static: false }) ref: ElementRef;

  @Input('offerId') order: string;

  constructor(
    private modalService: NgbModal,
    private offerService: OfferService,
    private router: Router,
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // this.activatedRoute.queryParams
    //   .pipe(
    //     map((res) => res.order),
    //     tap((res) => {
    //       if (!res) {
    //         this.router.navigate(['/dashboard']);
    //       }
    //       this.order = res;
    //     })
    //   )
    //   .subscribe();
  }

  public ngOnInit(): void {
    this.offerService.offerSubject.subscribe((offers) => {
      if (offers) {
        this.initForm();
      }
    });
  }

  get bankDetails(): BankDetails {
    return this.dashboardService.bankDetails;
  }

  get offer(): Offer {

    return this.offerService.getOfferByOid(this.order);
  }

  get bank(): Bank {
    return this.offerService.getOfferBank(this.offer);
  }

  get country(): Country {
    return this.offerService.getOfferCountry(this.offer);
  }

  get amount() {
    return this.formGroup
      .get('amount')
      .value.replace(/\D/g, '')
      .replace(/^0+/, '');
  }

  get env() {
    return env;
  }

  get userOffer(): UserOffer {
    return this.userOffer$;
  }


  onSubmit(conttent?): void {
    if (!this.dashboardService.userVerified) {
      this.modalService.open(conttent, { centered: true });
    } else if (this.formGroup.valid) {
      this.onGoingRequest = true;

      const offerApp: OfferApplication = {
        amount: this.amount,
        oid: this.offer.oid,
      };
      this.dashboardService.applyForOffer(offerApp).subscribe((res) => {
        this.userOffer$ = res;
        this.requestComplete = true;
        this.onGoingRequest = false;
        window.scroll(0, 0);
      });
    }
  }

  private initForm(): void {
    console.log('min', this.getMinDepositAmount());
    this.formGroup = this.fb.group({
      depositAmount: [`${this.getMinDepositAmount()}`, [Validators.required, Validators.min(this.getMinDepositAmount())]],
    });
    // this.formGroup.setValue({depositAmount: this.getMinDepositAmount()})
  }

  public getMinDepositAmount() {
    return this.offer.min_deposit === -1 ? 5000 : this.offer.min_deposit;
  }
}
