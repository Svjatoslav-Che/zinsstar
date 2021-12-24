import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() {
  }

  get contacts() {
    return env.contact;
  }

  get emails() {
    return env.emails;
  }
  get address() {
    return env.address;
  }
  ngOnInit(): void {
  }
}
