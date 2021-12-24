import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OvernightOffersComponent } from './components/overnight-offers/overnight-offers.component';
import { OvernightComponent } from './view/overnight.component';

const routes: Routes = [
  {
    path: '',
    component: OvernightComponent,
    children: [
      {
        path: '',
        component: OvernightOffersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightRoutingModule {
}
