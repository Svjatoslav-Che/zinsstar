import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserModelApi, UserOfferModel} from '../../models/user.model';
import {AdminService} from '../../services/admin.service';
import {ActivatedRoute} from '@angular/router';
import {ToolsUtils} from "../../../utils/tools.utils";
import {ToastrService} from "ngx-toastr";
import {MatSort} from "@angular/material/sort";
import {FilterStatus} from "../../../dashboard/components/user-investments/model/filter-status.enum";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public formatDate = ToolsUtils.formatDate;
  public getImageUrl = ToolsUtils.getImageUrl;

  public user: UserModelApi;

  @ViewChild(MatSort) public sort: MatSort;

  public offerColumnHeaders: string[] = ["id", "bank", "amount", "status", "date"];
  public dataSource: MatTableDataSource<UserOfferModel> = new MatTableDataSource();
  public userOfferStatusList: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.APPROVED, FilterStatus.RECEIVED, FilterStatus.CANCELED];

  constructor(
    private toastr: ToastrService,
    private admin: AdminService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  get offers() {
    if (this.user) {
      if (this.user.offers) {
        return this.user.offers;
      }
    }
    return [];
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.admin.getUserData(res.id).subscribe((user: UserModelApi) => {
        this.user = user;
      });

      this.admin.getUserOffers(res.id).subscribe(res3 => {
        this.dataSource = new MatTableDataSource(res3);
        this.dataSource.sort = this.sort;
      })
    })
  }

  public updateOfferStatus(offerId: number, status: FilterStatus): void {
    this.admin.updateOfferStatus(offerId, status).subscribe((res) => {
      this.toastr.success('offer status updated!', 'success');
    }, error =>{
      console.log(error);
      this.toastr.error(error.error.message, 'failed');
    });
  }

  public save() {
    const data = {
      id: this.user.id,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      dob: this.user.dob,
      gender: this.user.gender,
      social_status: this.user.social_status,
      nationality: this.user.nationality,
      nationality2: this.user.nationality2,
      phone: this.user.phone,
      email: this.user.email,
      country: this.user.country,
      zip: this.user.zip,
      street: this.user.street,
      us_citizen: this.user.us_citizen,
      acc_holder: this.user.acc_holder,
      iban: this.user.iban,
      bic: this.user.bic,
      referenceCode: this.user.referenceCode,
      availableBalance: this.user.availableBalance,
      totalBalance: this.user.totalBalance,
    };
    this.admin.updateUser(data).subscribe((res) => {
      this.toastr.success('user updated!', 'success');
      this.ngOnInit();
    }, error =>{
      console.log(error);
      this.toastr.error(error.message, 'failed');
    });
  }

  changeClient(value) {
    console.log(value);
  }
}
