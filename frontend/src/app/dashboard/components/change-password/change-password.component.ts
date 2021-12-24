import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../auth/services/auth.service";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  resetForm: FormGroup;
  loginProgress: boolean = false;
  faChevronRight = faChevronRight;
  sent: boolean = false;

  constructor(
    private toastr: ToastrService,
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      new: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      },
    );
  }

  public changePassword(): void {
    this.loginProgress = true;
    this.dashboardService.changePassword(this.resetForm.get('password').value, this.resetForm.get('new').value).subscribe(res => {
      this.sent = true;
      this.loginProgress = false;
      this.toastr.success('password changed', 'success');

    }, error => {
      this.toastr.error(error.error.message, 'failed');

      this.loginProgress = false;
    });
  }
}
