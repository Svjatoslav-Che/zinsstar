import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {DepositProductsComponent} from './components/products/deposit-products/deposit-products.component';
import {ProductsComponent} from './components/products/products.component';
import {UserInvestmentsComponent} from './components/user-investments/user-investments.component';
import {VerificationComponent} from './components/verification/verification.component';
import {DashboardComponent} from './view/dashboard.component';
import {ChangePasswordComponent} from "./components/change-password/change-password.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'MyInvestments', component: UserInvestmentsComponent },
      { path: 'Identification', component: VerificationComponent },
      { path: 'Personal', component: ChangePasswordComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'DepositProducts', component: DepositProductsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
