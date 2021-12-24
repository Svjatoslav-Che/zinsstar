import {AdditionalDataComponent} from './components/register/additional-data/additional-data.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthView} from './view/auth-view.component';
import {CommonModule} from '@angular/common';
import {ContactDataComponent} from './components/register/contact-data/contact-data.component';
import {EmailDataComponent} from './components/register/email-data/email-data.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import {NgModule} from '@angular/core';
import {PersonalDataComponent} from './components/register/personal-data/personal-data.component';
import {RegisterComponent} from './components/register/register.component';
import {SharedModule} from '../shared/shared.module';
import {PasswordComponent} from './components/register/password/password.component';
import {PasswordStrengthBarComponent} from './components/register/password/passoword-strength-bar/password-strength-bar.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from '../shared/guards/auth.guard';
import {allIcons, NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import {TranslateModule} from '@ngx-translate/core';
import {ConfirmEmailComponent} from './components/confirm-email/confirm-email.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {NgxMaskModule} from "ngx-mask";
import {VerificationService} from "../dashboard/services/verification.service";

@NgModule({
  declarations: [
    AuthView,
    LoginComponent,
    FooterComponent,
    EmailDataComponent,
    RegisterComponent,
    PersonalDataComponent,
    ContactDataComponent,
    AdditionalDataComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    ConfirmEmailComponent,
    ResetPasswordComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    TranslateModule.forChild(),
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [AuthService, AuthGuard, VerificationService,],
})
export class AuthModule {
}
