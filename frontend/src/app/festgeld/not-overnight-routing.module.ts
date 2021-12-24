import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotOverrnightOffersComponent} from './components/not-overrnight-offers/not-overrnight-offers.component';
import {NotOvernightComponent} from './view/not-overnight.component';

const routes: Routes = [
  {
    path: '',
    component: NotOvernightComponent,
    children: [
      {
        path: '',
        component: NotOverrnightOffersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotOvernightRoutingModule {
}
