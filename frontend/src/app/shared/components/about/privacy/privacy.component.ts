import {Component, OnInit} from '@angular/core';
import {environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  constructor() {
  }

  get contacts() {
    return env.contact;
  }

  get emails() {
    return env.emails;
  }

  get env() {
    return env;
  }

  ngOnInit(): void {
  }
}
