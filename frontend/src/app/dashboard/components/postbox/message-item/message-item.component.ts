import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope as FaEnvelope, faEnvelopeOpen as FaEnvelopeOpen, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent implements OnInit {
  faEnvelope = FaEnvelope;
  faEnvelopeOpen = FaEnvelopeOpen;
  seen: boolean = false;
  @Input('message') private message$: string;

  constructor() {
  }

  get message(): string {
    return this.message$;
  }

  ngOnInit(): void {
  }
}
