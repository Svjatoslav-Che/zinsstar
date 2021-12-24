import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit {
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
