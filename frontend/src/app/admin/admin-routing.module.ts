import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './view/admin.component';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserDocumentComponent} from './components/user-document/user-document.component';
import {BanksComponent} from "./components/banks/banks.component";
import {BankDetailsComponent} from "./components/bank-details/bank-details.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'banks', component: BanksComponent },
      { path: 'bank', component: BankDetailsComponent },
      { path: 'user', component: UserDetailsComponent },
      { path: 'doc', component: UserDocumentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
