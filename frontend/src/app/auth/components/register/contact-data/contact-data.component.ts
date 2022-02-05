import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {COUNTRIES, InternalCountry} from '../../../models/country.interface';
import {InputSuccessErrorClass, ShowHideMatError,} from '../../../utils/error-success.helper';
import {AuthService} from '../../../services/auth.service';
import {CountryISO, PhoneNumberFormat, SearchCountryField as SearchCountryField,} from 'ngx-intl-tel-input';
import {CountryMaskList, Mask} from 'src/app/auth/models/phone.mask';
import { GlobalsService } from "../../../../services/globals.service";

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss'],
})
export class ContactDataComponent implements OnInit {
  public preferredCountries: { name: string, code: string }[] = [
    { code: 'DEU', name: 'Deutschland'},
    { name: 'Switzerland', code: 'CH'},
    { name: 'Austria', code: 'AT'},
    { name: 'United Kingdom', code: 'UK'},
    { name: 'Polen', code: 'POL'},
    { name: 'Netherlands', code: 'BES'},
    { name: 'Belgien', code: 'BEL'},
  ];
  @Input('formGroup') formGroup: FormGroup;
  mask: Mask;

  constructor(private authService: AuthService,
              public globalsService: GlobalsService
  ) {
  }

  get phoneNumber(): AbstractControl {
    return this.formGroup.get('phone_number');
  }

  get street(): AbstractControl {
    return this.formGroup.get('street');
  }

  get houseNumber(): AbstractControl {
    return this.formGroup.get('house_number');
  }

  get postalCode(): AbstractControl {
    return this.formGroup.get('postal_code');
  }

  get town(): AbstractControl {
    return this.formGroup.get('town');
  }

  get country(): InternalCountry[] {
    return COUNTRIES;
  }

  get defaultCountry(): InternalCountry {
    return COUNTRIES.find((c) => c.code === 'DEU');
  }

  get masks(): Mask[] {
    return CountryMaskList;
  }

  // tslint:disable-next-line:typedef
  get CountryISO() {
    return CountryISO;
  }

  get SearchCountryField() {
    return SearchCountryField;
  }

  get PhoneNumberFormat() {
    return PhoneNumberFormat;
  }


  ngOnInit(): void {
    // this.globalsService.stepCounter = 3;
  }

  onSubmit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (this.formGroup.valid) {
      this.authService.registerData.phone = `${this.mask.prefix}${this.phoneNumber.value}`;
      this.authService.registerData.street = this.street.value;
      this.authService.registerData.house = this.houseNumber.value;
      this.authService.registerData.city = this.town.value;
      this.authService.registerData.country = this.defaultCountry.code;
      this.authService.registerData.zip = this.postalCode.value;
      this.globalsService.stepCounter = 4;
    }
  }

  getStyle(control: AbstractControl): string {
    return InputSuccessErrorClass(control);
  }

  showError(control: AbstractControl): boolean {
    return ShowHideMatError(control);
  }
}
