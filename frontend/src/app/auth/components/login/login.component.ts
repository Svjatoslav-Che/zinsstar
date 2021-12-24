import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {LoginCredentials} from '../../models/login.dto';
import {faChevronRight as FaChevronRight} from '@fortawesome/free-solid-svg-icons';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {environment as env} from 'src/environments/environment';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginProgress: boolean = false;
  faChevronRight = FaChevronRight;
  error: boolean = false;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  private _success = new Subject<string>();
  public success: boolean;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      ],
      password: ['', Validators.required],
    });

    this.route.queryParams
      .subscribe((params: Params) => {
        const { success, error } = params;
        if (success) this.success = JSON.parse(success);

        if (error) {
          console.log(error);
        }
      });
  }

  get email(): string {
    // @ts-ignore
    return this.loginForm.get('username').value;
  }

  get password(): string {
    // @ts-ignore
    return this.loginForm.get('password').value;
  }

  get emails() {
    return env.emails;
  }

  get contacts() {
    return env.contact;
  }

  ngOnInit(): void {
  }

  login(): void {
    this.loginProgress = true;
    this.auth
      .login({email: this.email, password: this.password} as LoginCredentials)
      .subscribe({
        complete: () => {
          this.error = false;
          this.loginProgress = false;
        },
        error: () => {
          this.error = true;
          this.loginProgress = false;
        },
      });
  }
}
