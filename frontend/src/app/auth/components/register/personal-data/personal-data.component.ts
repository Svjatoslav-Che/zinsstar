import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {AuthService, Gender} from '../../../services/auth.service';
import {GlobalsService} from "../../../../services/globals.service";
import {faLock as FaLock} from '@fortawesome/free-solid-svg-icons';

import {ACADEMIC_TITLES, AcademicTitle,} from '../../../models/academic-title.class';
import {ShowHideMatError} from '../../../utils/error-success.helper';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {
  minDate: Date = new Date();
  maxDate: Date = new Date();
  nowDate: Date = new Date();
  faLock = FaLock;
  days: string[] = ['1', '2', '3'];
  @Input('formGroup') formGroup: FormGroup;

  constructor(private authService: AuthService,
              public globalsService: GlobalsService
  ) {
    this.minDate.setFullYear(1940, 0, 0);
    this.maxDate.setFullYear(this.nowDate.getFullYear() - 18, 0, 0);
  }

  get firstName(): AbstractControl {
    return this.formGroup.get('first_name');
  }

  get year() {
    return this.formGroup.get('bYear');
  }

  get bMonth() {
    return this.formGroup.get('bMonth');
  }

  get bDay() {
    return this.formGroup.get('bDay');
  }

  get dateOfBirth(): string {
    return `${this.bDay}-${this.bMonth.value}-${this.year.value}`;
  }

  get lastName(): AbstractControl {
    return this.formGroup.get('last_name');
  }

  get gender(): AbstractControl {
    return this.formGroup.get('gender');
  }

  get academicTitles(): AcademicTitle[] {
    return ACADEMIC_TITLES;
  }

  get academicTitle(): AbstractControl {
    return this.formGroup.get('academic_position');
  }

  get titles() {
    return Gender;
  }

  ngOnInit(): void {
    // this.globalsService.stepCounter = 2;
  }

  onSubmit(): void {
    this.authService.registerData.first_name = this.firstName.value;
    this.authService.registerData.last_name = this.lastName.value;
    this.authService.registerData.gender = this.gender.value;
    this.authService.registerData.academic_position = this.academicTitle.value;
    this.authService.registerData.dob = this.dateOfBirth;
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    this.globalsService.stepCounter = 3;
  }

  showError(control: AbstractControl): boolean {
    return ShowHideMatError(control);
  }
}
