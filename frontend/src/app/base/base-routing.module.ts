import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseViewComponent } from './view/base-view.component';
import { BaseLandingComponent } from './components/base-landing/base-landing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WelcomeBonusComponent } from './components/welcome-bonus/welcome-bonus.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FAQComponent } from './components/faq/faq.component';
import { TaxInformationComponent } from './components/tax-information/tax-information.component';
import { InsuranceSystemComponent } from './components/insurance-system/insurance-system.component';
import { BanksComponent } from './components/banks/banks.component';
import { ImprintComponent } from '../shared/components/about/imprint/imprint.component';
import { SecurityComponent } from '../shared/components/about/security/security.component';
import { PrivacyComponent } from '../shared/components/about/privacy/privacy.component';
import { TermsComponent } from '../shared/components/about/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: BaseViewComponent,
    children: [
      {
        path: '',
        component: BaseLandingComponent,
      },

      {
        path: 'ueber-zinsunion',
        component: AboutUsComponent,
      },
      {
        path: 'willkommenspraemie',
        component: WelcomeBonusComponent,
      },
      {
        path: 'kontakt',
        component: ContactUsComponent,
      },
      {
        path: 'so-funktionierts',
        component: HowItWorksComponent,
      },
      {
        path: 'bank',
        component: BanksComponent,
      },
      {
        path: 'faqs',
        component: FAQComponent,
      },
      {
        path: 'steuern',
        component: TaxInformationComponent,
      },
      {
        path: 'einlagensicherung',
        component: InsuranceSystemComponent,
      },
      { path: 'about/imprint', component: ImprintComponent },
      { path: 'about/security', component: SecurityComponent },
      { path: 'about/privacy', component: PrivacyComponent },
      { path: 'about/terms', component: TermsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {
}
