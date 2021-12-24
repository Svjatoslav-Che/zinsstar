import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  // messages = ["message 1 ", "message 2", "message 3"];
  messages = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
