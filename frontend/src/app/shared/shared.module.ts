import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { BaseFooterComponent } from './components/base-footer/base-footer.component';
import { BaseHeaderComponent } from './components/base-header/base-header.component';
import { BaseRoutingModule } from '../base/base-routing.module';
import { CommonModule } from '@angular/common';
import { CurrencyFormat } from './pipes/currency.pipe';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImprintComponent } from './components/about/imprint/imprint.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NouisliderModule } from 'ng2-nouislider';
import { OfferBankInfoComponent } from './components/offers/offer-item/offer-bank-info/offer-bank-info.component';
import { OfferDetailsComponent } from './components/offers/offer-item/offer-details/offer-details.component';
import { OfferFilterComponent } from './components/offers/offer-filter/offer-filter.component';
import { OfferInsuranceComponent } from './components/offers/offer-item/offer-insurance/offer-insurance.component';
import { OfferItemComponent } from './components/offers/offer-item/offer-item.component';
import { OfferListComponent } from './components/offers/offer-list/offer-list.component';
import { OffersComponent } from './components/offers/offers.component';
import { PrivacyComponent } from './components/about/privacy/privacy.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { SecurityComponent } from './components/about/security/security.component';
import { TermsComponent } from './components/about/terms/terms.component';
import { TranslateModule } from '@ngx-translate/core';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { CodeInputModule } from 'angular-code-input';
import { NgxMaskModule } from 'ngx-mask';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserDataDialogComponent } from './dialogs/user-data-dialog/user-data-dialog.component';
import { SourceImagePipe } from './pipes/secure.pipe';
import { ImageSanitizePipe } from './pipes/image-sanitize.pipe';
import { MatSortModule } from '@angular/material/sort';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";

@NgModule({
  declarations: [
    LanguageSelectorComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    OffersComponent,
    OfferListComponent,
    OfferItemComponent,
    OfferInsuranceComponent,
    OfferDetailsComponent,
    OfferBankInfoComponent,
    OfferFilterComponent,
    OfferBankInfoComponent,
    SanitizeHtmlPipe,
    TermsComponent,
    SecurityComponent,
    PrivacyComponent,
    ImprintComponent,
    CurrencyFormat,
    UserDataDialogComponent,
    ImageSanitizePipe,
    SourceImagePipe
  ],
  imports: [
    CommonModule,
    DropzoneModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    JwBootstrapSwitchNg2Module,
    NgCircleProgressModule,
    NgxDropzoneModule,
    NgxIntlTelInputModule,
    NouisliderModule,
    AngularMultiSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    BaseRoutingModule,
    TranslateModule.forChild(),
    TranslateModule,
    MatTreeModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  exports: [
    LanguageSelectorComponent,
    AngularMultiSelectModule,
    BaseFooterComponent,
    BaseHeaderComponent,
    CurrencyFormat,
    DropzoneModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    JwBootstrapSwitchNg2Module,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgCircleProgressModule,
    NgbModule,
    NgxDropzoneModule,
    NgxIntlTelInputModule,
    NouisliderModule,
    OfferBankInfoComponent,
    MatPaginatorModule,
    OfferDetailsComponent,
    OfferFilterComponent,
    OfferInsuranceComponent,
    OfferItemComponent,
    OfferListComponent,
    OffersComponent,
    ReactiveFormsModule,
    CodeInputModule,
    NgxMaskModule,
    MatSidenavModule,
    MatListModule,
    MatSortModule,
    AngularEditorModule,
    SourceImagePipe
  ]
})
export class SharedModule {
}
