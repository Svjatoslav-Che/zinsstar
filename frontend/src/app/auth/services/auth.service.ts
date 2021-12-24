import {BehaviorSubject, from, Observable, of, Subject} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login.dto';
import { Register } from '../models/register.interface';
import { UrlBuilder } from '../../utils/url.builder';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtRawToken, UserRole } from '../models/jwt.class';
import {UserDocument} from "../../dashboard/models/user-doc.model";
import {DocumentStatus} from "../../dashboard/models/doc-status.enum";

export enum Gender {
  male = 'Herr',
  female = 'Frau',
}

export interface EmailCheck {
  exist: boolean;
  blacklisted: boolean;
}

export const TOKEN = 'token';

interface LoginResponse {
  access: string;
  refresh: string;
  type: string;
}

export enum RegistrationPhase {
  EMAIL,
  DATA,
  PASSWORD,
}

@Injectable()
export class AuthService {
  registerData: Register = {
    academic_position: null,
    birth_city: null,
    city: null,
    dob: null,
    birth_country: null,
    country: null,
    email: null,
    first_name: null,
    last_name: null,
    gender: null,
    house: null,
    nationality: null,
    nationality_2: null,
    offer_id: null,
    password: null,
    phone: null,
    profession: null,
    social_status: null,
    street: null,
    us_citizen: false,
    zip: 0,
  };
  public formGroup1: FormGroup;
  public formGroup2: FormGroup;
  public formGroup3: FormGroup;
  private registrationPhase$: RegistrationPhase = RegistrationPhase.EMAIL;
  private me$: { name: string; id: string; gender: Gender, docs: UserDocument } = null;
  constructor(
    public jwtHelper: JwtHelperService,
    private http: HttpClient,
    private urlBuilder: UrlBuilder,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.initFormGroups();
  }

  get phase() {
    return this.registrationPhase$;
  }

  set phase(value) {
    this.registrationPhase$ = value;
  }

  get firstNameLastName(): string {
    return `${this.registerData.first_name} ${this.registerData.last_name}`;
  }

  get dob(): string {
    return `${this.formGroup1.get('bDay').value}-${
      this.formGroup1.get('bMonth').value
    }-${this.formGroup1.get('bYear').value}`;
  }

  get authorized(): Observable<any> {
    return from(this.jwt);
  }

  get accessHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.jwt}`,
    });
  }

  get jwt(): string {
    return localStorage.getItem(TOKEN);
  }

  set jwt(jwt: string) {
    if (jwt) {
      localStorage.setItem(TOKEN, jwt);
    }
  }

  get decodedJwt(): JwtRawToken {
    return this.jwtHelper.decodeToken(this.jwt) as JwtRawToken;
  }
  get me() {
    return this.me$;
  }
  set me(val) {
    this.me$ = val;
  }
  get user() {
    return this.decodedJwt.user;
  }

  checkEmail(email: string): Observable<EmailCheck> {
    return this.http.get<EmailCheck>(`${this.urlBuilder.auth('check')}`, {
      params: { email: email },
    });
  }
  get userVerified(): boolean {
    if (this.user) {
      return this.user.verified;
    }
    return false;
  }
  register(): Observable<any> {
    const body = this.registerData;
    body.dob = this.dob;
    return this.http.post(`${this.urlBuilder.auth('register')}`, body).pipe(
      tap((res) => {
        this.setAccessToken(res.access);
        this.router.navigate(['/dashboard']);
        this.initFormGroups();
        this.registerData = {
          academic_position: null,
          birth_city: null,
          city: null,
          dob: null,
          birth_country: null,
          country: null,
          email: null,
          first_name: null,
          last_name: null,
          gender: null,
          house: null,
          nationality: null,
          nationality_2: null,
          offer_id: null,
          password: null,
          phone: null,
          profession: null,
          social_status: null,
          street: null,
          us_citizen: false,
          zip: 0,
        };
        this.phase = RegistrationPhase.EMAIL;
      })
    );
  }

  login(credentials: LoginCredentials): Observable<any> {
    const { email, password } = credentials;
    const body = { email, password };
    return this.http
      .post<LoginResponse>(`${this.urlBuilder.auth('login')}`, body)
      .pipe(
        tap((res) => {
          this.http
            .get<{ name: string; id: string; gender: Gender, docs: UserDocument }>(
              this.urlBuilder.user('me'),
              { headers: this.accessHeader }
            )
            .subscribe((res) => {
              this.me$ = res;
            });
          this.setAccessToken(res.access);

          let route =
            this.user.role === UserRole.ADMIN ? '/admin' : '/dashboard';
          this.router.navigate([route]);
        })
      );
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.jwt);
  }

  logout() {
    localStorage.removeItem(TOKEN);
    this.router.navigate(['/']);
  }

  confirmEmail(token: string) {
    return this.http.post(this.urlBuilder.auth('confirm'), {
      body: { token: token },
    });
  }

  hasAccess(): Observable<boolean> {
    if (this.jwt) {
      return of(this.isAuthenticated()).pipe(
        map((res) => res),
        tap((res) => (!res ? localStorage.removeItem(TOKEN) : null))
      );
    } else {
      return of(false);
    }
  }

  public resetPassword(email: string) {
    return this.http.post(this.urlBuilder.auth('restore'), { email });
  }

  private initFormGroups(): void {
    //Personal data
    this.formGroup1 = this.fb.group({
      first_name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      last_name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      academic_position: [''],
      gender: ['', Validators.required],
      bDay: ['', Validators.required],
      bMonth: ['', Validators.required],
      bYear: ['', Validators.required],
    });

    //Contact Data
    this.formGroup2 = this.fb.group({
      phone_number: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      street: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      house_number: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      postal_code: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      town: [
        '',
        Validators.compose([Validators.required, Validators.minLength(1)]),
      ],
      country_code: [
        { value: { code: 'DEU', name: 'Deutschland' }, disabled: true },
      ],
    });

    // Address Data
    this.formGroup3 = this.fb.group({
      social_status: ['', Validators.required],
      profession: ['', Validators.required],
      birth_place: ['', Validators.required],
      birth_country: ['DEU', Validators.required],
      nationality: ['DEU', Validators.required],
      residency_country: ['DEU', Validators.required],
      second_nationality: [''],
      sie: ['', Validators.required],
    });
  }

  private setAccessToken(value: string) {
    try {
      this.jwt = value;
    } catch (error) {
      console.log(`Error ${error}`);
    }
  }
}
