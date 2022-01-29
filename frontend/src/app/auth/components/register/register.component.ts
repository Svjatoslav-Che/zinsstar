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
  currentStep: number = 1;

  constructor(private authService: AuthService) {
  }

  get phase() {
    // console.log(this.authService.phase);
    return this.authService.phase;
  }

  get Phase() {
    return RegistrationPhase;
  }

  get personalFormGroup(): FormGroup {
    // console.log(this.authService.formGroup1);
    // this.currentStep = 2;
    // console.log('Cur Step: ' + this.currentStep);
    return this.authService.formGroup1;

  }

  get contactFormGroup(): FormGroup {
    // console.log(this.authService.formGroup2);
    // this.currentStep = 3;
    // console.log('Cur Step: ' + this.currentStep);
    return this.authService.formGroup2;

  }

  get additionalFormGroup(): FormGroup {
    // console.log(this.authService.formGroup3);
    // this.currentStep = 4;
    // console.log('Cur Step: ' + this.currentStep);
    return this.authService.formGroup3;

  }

  ngOnInit(): void {
    console.log('Cur Step: ' + this.currentStep);
  }
}
