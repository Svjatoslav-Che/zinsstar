import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  message: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
