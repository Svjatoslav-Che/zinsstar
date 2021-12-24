import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './view/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {UserNavBarComponent} from './components/user-nav-bar/user-nav-bar.component';
import {UserFooterComponent} from './components/user-footer/user-footer.component';
import {VerificationComponent} from './components/verification/verification.component';
import {OverviewComponent} from './components/overview/overview.component';
import {UserInvestmentsComponent} from './components/user-investments/user-investments.component';
import {PostboxComponent} from './components/postbox/postbox.component';
import {NewMessageComponent} from './components/postbox/new-message/new-message.component';
import {MessageItemComponent} from './components/postbox/message-item/message-item.component';
import {MessageListComponent} from './components/postbox/message-list/message-list.component';
import {HomeComponent} from './components/home/home.component';
import {InvestmentComponent} from './components/user-investments/investment/investment.component';
import {DepositProductsComponent} from './components/products/deposit-products/deposit-products.component';
import {ProductsComponent} from './components/products/products.component';
import {AuthService} from '../auth/services/auth.service';
import {DashboardService} from './services/dashboard.service';
import {CurrencyFormat} from '../shared/pipes/currency.pipe';
import {allIcons, NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import {UserVerificationComponent} from './components/user-verification/user-verification.component';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InvestmentTemplateComponent} from './components/user-investments/investment-template/investment-template.component';
import {VerificationService} from './services/verification.service';
import {SingleDocumentComponent} from './components/verification/single-document/single-document.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatDialogModule} from "@angular/material/dialog";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    DashboardComponent,
    UserNavBarComponent,
    UserFooterComponent,
    VerificationComponent,
    OverviewComponent,
    UserInvestmentsComponent,
    PostboxComponent,
    ProductsComponent,
    NewMessageComponent,
    MessageItemComponent,
    MessageListComponent,
    HomeComponent,
    DepositProductsComponent,
    InvestmentComponent,
    UserVerificationComponent,
    InvestmentTemplateComponent,
    SingleDocumentComponent,
    ChangePasswordComponent,
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        NgbModule,
        NgbAlertModule,
        NgxBootstrapIconsModule.pick(allIcons),
        TranslateModule,
        MatDialogModule,
        MatButtonToggleModule,
    ],
  providers: [
    AuthService,
    DashboardService,
    CurrencyFormat,
    VerificationService,
  ],
})
export class DashboardModule {
}
