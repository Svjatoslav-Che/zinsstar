import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss'],
})
export class UserVerificationComponent implements OnInit {
  constructor(private dbService: DashboardService) {
  }

  get percent(): number {
    if (this.dbService.hasActiveOffers) {
      return 100;
    } else {
      return 85;
    }
  }
  get verified() {
    return this.dbService.verified;
  }
  ngOnInit(): void {
  }

}
