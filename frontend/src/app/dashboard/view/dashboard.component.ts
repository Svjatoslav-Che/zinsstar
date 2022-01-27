import {Component, OnDestroy, OnInit} from '@angular/core';
import {VerificationComponent} from "../components/verification/verification.component";
import {Router} from "@angular/router";
import {DashboardService} from "../services/dashboard.service";
import {VerificationService} from "../services/verification.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public offersOpen: boolean = false;
  public routeShow: string = 'casual';
  public user;
  public offerId: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dashboardService: DashboardService,
    private verificationService: VerificationService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.verificationService.userSubject.subscribe((user) => {
      if (!user) return;

      this.user = user;
    })

    this.verificationService.documentsSubject.subscribe(documents => {
      if (!documents) return;

      if (!this.verificationService.verified) {
        this.openDialog();
      }
      console.log('VerificationService', 'verified', this.verificationService.verified);
    });
    document.body.style.background = '#F7F7F7';
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(VerificationComponent, {
      width: '850px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openRoute() {
    this.offersOpen = !this.offersOpen;
  }

  public onNavigateDashboard() {
    this.routeShow = 'casual';
  }

  chooseRoute(value: any) {
    this.routeShow = value;
  }

  public logout(): void {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    document.body.style.background = '#FFF';
  }

  public onOfferSelected(offerId: string): void {
    this.offerId = offerId;
    this.routeShow = 'offer';
  }
}
