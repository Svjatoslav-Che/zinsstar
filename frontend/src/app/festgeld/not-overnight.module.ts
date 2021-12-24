import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotOvernightRoutingModule} from './not-overnight-routing.module';
import {NotOvernightComponent} from './view/not-overnight.component';
import {SharedModule} from '../shared/shared.module';
import {NotOverrnightOffersComponent} from './components/not-overrnight-offers/not-overrnight-offers.component';
import {TranslateModule} from "@ngx-translate/core";

// Festgeld Module

@NgModule({
  declarations: [
    NotOvernightComponent,
    NotOverrnightOffersComponent
  ],
    imports: [
        CommonModule,
        NotOvernightRoutingModule,
        SharedModule,
        TranslateModule
    ]
})
export class NotOvernightModule {
}
