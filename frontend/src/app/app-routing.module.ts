import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIsAdminGuard } from './admin/guards/user-is-admin.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./base/base.module').then((m) => m.BaseModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'tagesgeld',
    loadChildren: () =>
      import('./tagesgeld/overnight.module').then((m) => m.OvernightModule),
  },
  {
    path: 'festgeld',
    loadChildren: () =>
      import('./festgeld/not-overnight.module').then(
        (m) => m.NotOvernightModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [UserIsAdminGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
