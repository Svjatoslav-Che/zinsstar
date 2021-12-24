import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/services/auth.service';
import {faAngleDown as FaArrowDown, faAngleUp as FaArrowUp} from '@fortawesome/free-solid-svg-icons'
import {UserModel} from 'src/app/auth/models/jwt.class';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.scss']
})
export class UserNavBarComponent implements OnInit {
  timeleft: string = '15:00';

  faArrowDown = FaArrowDown;
  faArrowUp = FaArrowUp;

  isCollapse1 = true;
  isCollapse2 = true;
  isCollapse3 = true;

  constructor(private authService: AuthService) {
  }

  get user(): UserModel {
    return this.authService.decodedJwt.user;
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}
