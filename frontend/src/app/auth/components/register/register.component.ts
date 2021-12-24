import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService, RegistrationPhase} from '../../services/auth.service';
import {faLock as FaLock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  currentForm = 0;
  faLock = FaLock;

  constructor(private authService: AuthService) {
  }

  get phase() {
    return this.authService.phase;
  }

  get Phase() {
    return RegistrationPhase;
  }

  get personalFormGroup(): FormGroup {
    return this.authService.formGroup1;
  }

  get contactFormGroup(): FormGroup {
    return this.authService.formGroup2;
  }

  get additionalFormGroup(): FormGroup {
    return this.authService.formGroup3;
  }

  ngOnInit(): void {
  }
}
