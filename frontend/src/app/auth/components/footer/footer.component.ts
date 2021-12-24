import {Component, OnInit} from '@angular/core';
import {faEnvelope as FaEnvelope, faPhone as FaPhone} from '@fortawesome/free-solid-svg-icons'
import {environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-auth-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faTelephone = FaPhone;
  faEnvelope = FaEnvelope;

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
