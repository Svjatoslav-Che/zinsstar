import { CustomEmailValidator } from './../../../../shared/services/custom-email-validator.service';
import { Component, OnInit } from '@angular/core';

import { AuthService, RegistrationPhase, } from 'src/app/auth/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Register } from '../../../models/register.interface';
import { faLockOpen as FaLockOpen } from '@fortawesome/free-solid-svg-icons';
import { ShowHideMatError } from 'src/app/auth/utils/error-success.helper';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-email-data',
  templateUrl: './email-data.component.html',
  styleUrls: ['./email-data.component.scss'],
})
export class EmailDataComponent implements OnInit {
  emailExistInDB = false;
  blacklisted = false;
  emailForm: FormGroup;
  registerForm: Register = {};
  faLockOpen = FaLockOpen;
  loadingProgress: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private emailValidationService: CustomEmailValidator,
    private translateService: TranslateService,
  ) {
  }

  get email(): string {
    return this.emailForm.get('email').value;
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: [
        '',
        [
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.required,
        ],
        // [this.emailValidationService.blackListDomain()],
      ],
    });
  }

  checkExist(): void {
    this.authService.checkEmail(this.email).subscribe((res) => {
      this.emailExistInDB = res.exist;
      this.blacklisted = res.blacklisted;
    });
  }

  onSubmit(): void {
    this.loadingProgress = true;
    if (this.emailForm.valid && !this.emailExistInDB && !this.blacklisted) {
      this.authService.registerData.email = this.email;
      this.authService.phase = RegistrationPhase.DATA;
    }
  }
  showError(control: AbstractControl): boolean {
    return ShowHideMatError(control);
  }
}
