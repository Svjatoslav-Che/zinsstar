import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {COUNTRIES, InternalCountry, TAX_COUNTRIES,} from '../../../models/country.interface';
import {Profession, PROFESSIONS} from '../../../models/profession.interface';
import {MaritalStatus, SOCIAL_STATUS,} from '../../../models/marital-status.interface';
import {ACADEMIC_TITLES, AcademicTitle,} from '../../../models/academic-title.class';
import {InputSuccessErrorClass, ShowHideMatError,} from '../../../utils/error-success.helper';
import {AuthService, RegistrationPhase} from '../../../services/auth.service';
import {faQuestionCircle as FaQuestionCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.scss'],
})
export class AdditionalDataComponent implements OnInit {
  USAPerson =
    'Auf Grund der FATCA-Bestimmungen (Foreign Account Tax Compliance Act) muss bei der\n' +
    'Kontoeröffnung festgestellt werden, ob Sie möglicherweise in den USA steuerpflichtig sind. US Person ist\n' +
    'definiert als: (1) US-Staatsbürger (auch doppelte Staatsbürgerschaft) (2) Wohnsitz in den USA (US\n' +
    'resident alien, z.B. Greencard oder substantial presence, Details siehe\n' +
    'https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status) (3) In den USA /\n' +
    'auf US-Territorium geboren (4) Aus einem anderen Grund in den USA steuerpflichtig (z.B. Doppelwohnsitz,\n' +
    'gemeinsame Steuererklärung mit US-Person etc.)';
  faQuestionCircle = FaQuestionCircle;
  @Input('formGroup') formGroup: FormGroup;

  constructor(private authService: AuthService) {
  }

  get socialStatus(): AbstractControl {
    return this.formGroup.get('social_status');
  }

  get taxResidencyCountry(): AbstractControl {
    return this.formGroup.get('residency_country');
  }

  get profession(): AbstractControl {
    return this.formGroup.get('profession');
  }

  get birthPlace(): AbstractControl {
    return this.formGroup.get('birth_place');
  }

  get birthCountry(): AbstractControl {
    return this.formGroup.get('birth_country');
  }

  get nationality(): AbstractControl {
    return this.formGroup.get('nationality');
  }

  get secondNationality(): AbstractControl {
    return this.formGroup.get('second_nationality');
  }

  get nationalityMatch(): string {
    if (this.secondNationality.touched) {
      if (this.nationality.value === this.secondNationality.value) {
        return 'has-error';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  get countries(): InternalCountry[] {
    return COUNTRIES;
  }

  get professions(): Profession[] {
    return PROFESSIONS;
  }

  get AllSocialStatus(): MaritalStatus[] {
    return SOCIAL_STATUS;
  }

  get taxCountry(): InternalCountry[] {
    return TAX_COUNTRIES;
  }

  get academicTitle(): AbstractControl {
    return this.formGroup.get('academic_title');
  }

  get academicTitles(): AcademicTitle[] {
    return ACADEMIC_TITLES;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.registerData.social_status = this.socialStatus.value;
    this.authService.registerData.profession = this.profession.value;
    this.authService.registerData.birth_country = this.birthCountry.value;
    this.authService.registerData.birth_city = this.birthPlace.value;
    this.authService.registerData.nationality = this.nationality.value;
    this.authService.registerData.nationality_2 = this.secondNationality.value;
    this.authService.registerData.us_citizen = false;
    this.authService.registerData.pay_tax_country = this.taxResidencyCountry.value;
    if (this.formGroup.valid) {
      this.authService.phase = RegistrationPhase.PASSWORD;
    }
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  getStyle(control: AbstractControl): string {
    return InputSuccessErrorClass(control);
  }

  showError(control: AbstractControl): boolean {
    return ShowHideMatError(control);
  }
}
