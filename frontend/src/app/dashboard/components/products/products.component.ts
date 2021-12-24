import {AfterViewInit, Component, OnInit, ViewChild,} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {OfferService} from 'src/app/shared/services/offer.service';

interface Tab {
  title: string;
  subtitle: string;
  overnight: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  links_: Tab[] = [
    {title: 'Festgeld', subtitle: 'Aus ganz Europa', overnight: false},
    {title: 'Tagesgeld', subtitle: 'Jederzeit verfügbar', overnight: true},
  ];
  @ViewChild('tabGroup', {static: false}) matTabGroup: MatTabGroup;
  activaTab: number;

  constructor(
    private offerService: OfferService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.queryParams
      .pipe(
        map((res) => res ? res.type : 'tagesgeld'),
        tap((res) =>
          res === 'tagesgeld' ? (this.activaTab = 1) : (this.activaTab = 0)
        )
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.initTab();
  }

  ngOnInit(): void {
  }

  initTab(): void {
    this.matTabGroup.selectedIndex = this.activaTab;
  }

  resetFilter(): void {
    this.offerService.resetFilterOptions();
  }

  ngOnDestroy(): void {
  }
}
