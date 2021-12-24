import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-bonus-modal',
  templateUrl: './bonusmodal.component.html',
  styleUrls: ['./bonusmodal.component.scss'],
})
export class BonusModalComponent implements OnInit {
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
