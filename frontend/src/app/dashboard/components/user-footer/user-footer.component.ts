import {Component, OnInit} from '@angular/core';
import {environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.scss']
})
export class UserFooterComponent implements OnInit {
  date: Date = new Date();

  constructor() {
  }

  get contacts() {
    return env.contact;
  }

  get emails() {
    return env.emails;
  }

  ngOnInit(): void {
  }
}
