import { RouterModule, Routes } from '@angular/router';

import { AuthView } from './view/auth-view.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthView,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AutoLoginGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AutoLoginGuard],
      },
      {
        path: 'reset',
        component: ResetPasswordComponent,
        canActivate: [AutoLoginGuard],
      },
      { path: 'confirm', component: ConfirmEmailComponent },

      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
