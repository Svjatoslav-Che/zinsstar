import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './view/admin.component';
import {SharedModule} from '../shared/shared.module';
import {UsersComponent} from './components/users/users.component';
import {MatDialogModule} from '@angular/material/dialog';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserDocumentComponent} from './components/user-document/user-document.component';

import {UseHttpImageSourcePipeModule} from '@this-dot/ng-utils';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {SafeUrlPipe} from "./models/safe-url.pipe";
import {BanksComponent} from "./components/banks/banks.component";
import {BankDetailsComponent} from "./components/bank-details/bank-details.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    UserDetailsComponent,
    UserDetailsComponent,
    UserDocumentComponent,
    SafeUrlPipe,
    BanksComponent,
    BankDetailsComponent,
  ],
  imports: [
    PdfViewerModule,
    CommonModule,
    MatSelectModule,
    UseHttpImageSourcePipeModule /* other modules */,
    AdminRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    SharedModule,
    MatSlideToggleModule
  ]
})
export class AdminModule {
}
