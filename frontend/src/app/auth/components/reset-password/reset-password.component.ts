import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  loginProgress: boolean = false;
  faChevronRight = faChevronRight;
  sent: boolean = false;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(6)])],
      },
    );
  }

  public resetPassword(): void {
    this.loginProgress = true;
    this.auth.resetPassword(this.resetForm.get('email').value).subscribe(res => {
      this.sent = true;
      this.loginProgress = false;
    }, error => {
      this.toastr.error(error.error.message, 'failed');

      this.loginProgress = false;
    });
  }
}
