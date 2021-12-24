import { getSaver, SAVER } from './admin/providers/saver';
import { AuthTokenInterceptor } from './auth/interceptors/auth-token.interceptor';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UseHttpImageSourcePipeModule } from '@this-dot/ng-utils';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyPipe } from '@angular/common';
import { SourceImagePipe } from './shared/pipes/secure.pipe';

import { WINDOW_PROVIDERS } from './shared/window-token';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthModule } from './auth/auth.module';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { CurrencyFormat } from './shared/pipes/currency.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { UserDataDialogComponent } from './shared/dialogs/user-data-dialog/user-data-dialog.component';
import { SanitizeHtmlPipe } from './shared/pipes/sanitize-html.pipe';
import {LanguageService} from "./shared/services/language.service";
import {ToastrModule} from "ngx-toastr";

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    UserDataDialogComponent,
  ],
  imports: [
    UseHttpImageSourcePipeModule.forRoot({
      loadingImagePath: 'assets/icon/loading.gif',
      errorImagePath: 'assets/icon/error.png',
    }),
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#004b8c',
      innerStrokeColor: '#156cc4',
      animationDuration: 300,
    }),
    AuthModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [
    LanguageService,
    TranslateService,
    CurrencyPipe,
    CurrencyFormat,
    WINDOW_PROVIDERS,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    SanitizeHtmlPipe,
    SourceImagePipe,
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: SAVER,
      useFactory: getSaver,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
