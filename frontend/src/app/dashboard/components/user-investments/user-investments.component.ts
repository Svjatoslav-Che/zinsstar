import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService, UserOffer} from '../../services/dashboard.service';
import {FilterStatus} from './model/filter-status.enum';
import * as echarts from 'echarts/core';
import {GridComponent, LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';
import {DOCUMENT} from "@angular/common";
import {ToolsUtils} from "../../../utils/tools.utils";
import {getChartOptions} from "./options/getChartOptions";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

enum ChartType {
  WEEKLY,
  MONTHLY,
  YEARLY,
}

const WEEKLY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHLY = ToolsUtils.range(ToolsUtils.getDaysInMonth());
const YEARLY = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-user-investments',
  templateUrl: './user-investments.component.html',
  styleUrls: ['./user-investments.component.scss'],
})
export class UserInvestmentsComponent implements OnInit {
  public chartViewElement: HTMLElement;
  public investmentChart;
  public userOffers: UserOffer[];
  public expanded = false;
  public filter = FilterStatus;
  public chartType = ChartType;
  public selectedChartType :ChartType = ChartType.WEEKLY;

  public constructor(
    private dashboardService: DashboardService,
    private router: Router,
    @Inject(DOCUMENT) document,
    ) {
  }

  public changeCartType(type: ChartType) {
    this.selectedChartType = type;
    this.setUpChart(this.userOffers, type);
  }

  get progress() {
    return this.dashboardService.hasActiveOffers;
  }

  get totalInvestments() {
    let sum = 0;
    if (this.userOffers) {
      this.userOffers.forEach((offer) => (sum += offer.amount));
    }
    return sum;
  }

  private getCalculations(offer: UserOffer) {
    const investmentStart: Date = new Date(offer.investment_start);

    const investmentStartDay = ToolsUtils.getCurrentDayOfYear(investmentStart) - 1;

    const calculations = Array(ToolsUtils.getCurrentDayOfYear()).fill(0);

    let amount = offer.amount;
    const profit = offer.amount * offer.offer.interest_rate / 100;
    for(let i = investmentStartDay; i < ToolsUtils.getCurrentDayOfYear(); i++) {
      calculations[i] = amount;
      amount+=profit;
    }

    console.log('getCalculations', calculations);
    return calculations.reverse();
  }

  private setUpChart(offers: UserOffer[], type: ChartType = ChartType.WEEKLY) {
    // @ts-ignore
    this.chartViewElement = (<HTMLElement>document.getElementById("chart_investments"))

    const receivedOffers = offers.filter((offer: UserOffer) => offer.status === FilterStatus.RECEIVED);
    const legend = receivedOffers.map((offer) => offer.offer.oid);
    const xAxisData = type === ChartType.WEEKLY ? WEEKLY : type === ChartType.MONTHLY ? MONTHLY : YEARLY;
    console.log(xAxisData);

    const series = receivedOffers.map((offer) => {
      const result = {
        name: offer.offer.oid,
        smooth: true,
        type: 'line',
        stack: offer.offer.oid,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 10,
          shadowOffsetY: 8
        },
        data: []
      };
      const calculations = this.getCalculations(offer);
      console.log(calculations);

      const size = type === ChartType.WEEKLY ? 7 : type === ChartType.MONTHLY ? ToolsUtils.getDaysInMonth() : ToolsUtils.getCurrentDayOfYear();
      // console.log(size);

      switch (type) {
        case ChartType.WEEKLY:
          result.data = calculations.slice(0, new Date().getDay()).reverse();
          break;
        case ChartType.MONTHLY:
          result.data = calculations.slice(0, new Date().getDate()).reverse();
          break;
        case ChartType.YEARLY:
          result.data = calculations.slice(0, ToolsUtils.getCurrentDayOfYear()).reverse();
          break;
      }


      return result;
    });
    console.log(series);

    this.investmentChart = echarts.init(this.chartViewElement);

    this.investmentChart.setOption(getChartOptions('Abgeschlossene Investments', legend, xAxisData, series));

  }
  public ngOnInit(): void {
    this.dashboardService.userOffersSubject.subscribe((offers) => {
      if (!offers) return;

      this.userOffers = offers;
      this.setUpChart(offers);
    })

  }

  goTo(val): void {
    this.router.navigate(['/dashboard/Products'], {
      queryParams: { type: val },
    });
  }

  applicationFilter(status): UserOffer[] {
    return this.userOffers.filter((offer) => offer.status === status);
  }
}
