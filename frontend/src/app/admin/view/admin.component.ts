import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logout()
  }
}
