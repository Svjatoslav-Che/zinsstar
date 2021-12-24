import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BaseRoutingModule} from './base-routing.module';
import {BaseViewComponent} from './view/base-view.component';
import {BaseLandingComponent} from './components/base-landing/base-landing.component';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {HowItWorksComponent} from './components/how-it-works/how-it-works.component';
import {WelcomeBonusComponent} from './components/welcome-bonus/welcome-bonus.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {TaxInformationComponent} from './components/tax-information/tax-information.component';
import {InsuranceSystemComponent} from './components/insurance-system/insurance-system.component';
import {BaseTopComponent} from './components/base-top/base-top.component';
import {FAQComponent} from './components/faq/faq.component';
import {BanksComponent} from './components/banks/banks.component';
import {BankFilterComponent} from './components/banks/bank-filter/bank-filter.component';
import {BankDetailsComponent} from './components/banks/bank-details/bank-details.component';
import {BankItemComponent} from './components/banks/bank-item/bank-item.component';
import {BonusModalComponent} from './modal/bonusmodal/bonusmodal.component';

@NgModule({
  declarations: [
    BaseViewComponent,
    BaseLandingComponent,
    ContactUsComponent,
    HowItWorksComponent,
    WelcomeBonusComponent,
    InsuranceSystemComponent,
    AboutUsComponent,
    TaxInformationComponent,
    BaseTopComponent,
    FAQComponent,
    BanksComponent,
    BankFilterComponent,
    BankDetailsComponent,
    BankItemComponent,
    BonusModalComponent,
  ],
    imports: [
        CommonModule,
        BaseRoutingModule,
        TranslateModule.forChild(),
        TranslateModule,
        SharedModule,
    ],
  providers: [
    TranslateService,
  ],
})
export class BaseModule {
}
