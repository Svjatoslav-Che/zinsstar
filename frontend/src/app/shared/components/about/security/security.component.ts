import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  get env() {
    return env;
  }
  
}
