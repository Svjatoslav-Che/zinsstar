import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @Input('festgeld') isOvernight: boolean;
  @Input('private') private_: boolean;
  @Input('place') place: string = 'festgeld';
  amount = 50000;

  @Output()
  public onOfferSelected = new EventEmitter();


  public onOfferSelectedFunc(event) {
    this.onOfferSelected.emit(event);
  }
  constructor() {
  }

  ngOnInit(): void {
  }

  amountChanges(amount: any) {
    this.amount = Number(amount);
  }
}
