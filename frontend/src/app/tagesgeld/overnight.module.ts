import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OvernightRoutingModule } from './overnight-routing.module';
import { OvernightComponent } from './view/overnight.component';
import { SharedModule } from '../shared/shared.module';
import { OvernightOffersComponent } from './components/overnight-offers/overnight-offers.component';
import {TranslateModule} from "@ngx-translate/core";

//Tagesgeld Module
@NgModule({
  declarations: [
    OvernightComponent,
    OvernightOffersComponent
  ],
  imports: [
    CommonModule,
    OvernightRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class OvernightModule {
}
