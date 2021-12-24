import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faAngleDown as FaArrowDown, faAngleUp as FaArrowUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss']
})
export class BaseHeaderComponent implements OnInit, AfterViewInit {

  faArrowDown = FaArrowDown;
  faArrowUp = FaArrowUp;

  isCollapse1 = true;
  isCollapse2 = true;
  isCollapse3 = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onHover(event): void {
    try {
      event.toggle();
    } catch (e) {

    }

  }

  ngAfterViewInit(): void {
  }

}
