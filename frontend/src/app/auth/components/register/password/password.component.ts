import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators,} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {environment as env} from 'src/environments/environment';
import {GlobalsService} from "../../../../services/globals.service";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  passwordForm: FormGroup;
  registerOnGoing: boolean = false;

  constructor(
      public globalsService: GlobalsService,
      private fb: FormBuilder,
      private authService: AuthService) {
  }

  get contacts() {
    return env.contact;
  }

  get emails() {
    return env.emails;
  }

  get password(): AbstractControl {
    return this.passwordForm.get('password');
  }

  get fullName(): string {
    return this.authService.firstNameLastName;
  }

  ngOnInit(): void {
    // this.globalsService.stepCounter = 5;
    this.passwordForm = this.fb.group(
      {
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        confirmPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      },
      {validators: ConfirmedValidator('password', 'confirmPassword')}
    );
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      this.registerOnGoing = true;
      this.authService.registerData.password = this.password.value;
      this.authService
        .register()
        .subscribe((res) => (this.registerOnGoing = false));
    }
  }
}

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({confirmedValidator: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
