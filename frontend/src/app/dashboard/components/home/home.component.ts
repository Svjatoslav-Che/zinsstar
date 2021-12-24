import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  faCheck as FaCheck,
  faChevronRight as FaChevronRight,
  faPlus as FaPlus,
} from '@fortawesome/free-solid-svg-icons';
import {BankDetails} from '../../models/bank-details.model';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faCheck = FaCheck;
  faPlus = FaPlus;
  faChevronRight = FaChevronRight;
  alerts: Alert[] = [];

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
  ) {}

  get bankDetails(): BankDetails {
    return this.dashboardService.bankDetails;
  }

  ngOnInit(): void {
    if (this.dashboardService.userOffers) {
      this.router.navigate(['/dashboard/MyInvestments']);
    }
  }

  goTo(where: string): void {
    this.router.navigate(['/dashboard/Products'], {
      queryParams: {
        type: where,
      },
    });
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}

interface Alert {
  type: string;
  message: string;
  amount?: number;
}
