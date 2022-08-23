import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ChartService } from '../../../../services/chart.service';
import {Colors} from '../../../../constants/colors.service';
import {ViewsService} from '../../../../services/views.service';
import {ActivatedRoute} from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';

@Component({
  selector: 'app-apex-linear-chart-area',
  templateUrl: './apex-linear-chart-area.component.html',
  styleUrls: ['./apex-linear-chart-area.component.scss']
})
export class ApexLinearChartAreaComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;

  domain: any;

  subdomainsInfo: any;
  passwordsInfo: any;
  subdomainsLoaded = false;
  passwordsLoaded = false;

  constructor(private route: ActivatedRoute, private viewsService: ViewsService) {
    this.chartOptions = {
      series: [{
        name: 'Items',
        data: []
      }],
      chart: {
        height: 350,
        type: 'bar',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Tracked Data',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        },
        column: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },
      xaxis: {
        categories: [],
      }
    };

  }

  ngOnInit(): void {
    this.domain = this.route.snapshot.paramMap.get('domain');

    this.viewsService.getData('subdomains').subscribe(res => {
      for (const dom of Object.entries(res.subdomains)) {
        if (dom[0] === this.domain) {
          this.subdomainsInfo = dom[1];
        }
      }
      this.chartOptions.xaxis.categories.push('Subdomains');
      this.chartOptions.series[0].data.push(this.subdomainsInfo.length);
      this.subdomainsLoaded = true;
    });
    this.viewsService.getData('passwords').subscribe(res => {
      for (const dom of Object.entries(res.passwords)) {
        if (dom[0] === this.domain) {
          this.passwordsInfo = dom[1];
        }
      }
      this.chartOptions.xaxis.categories.push('Filtered passwords');
      this.chartOptions.series[0].data.push(this.passwordsInfo.total);
      //this.chartDataConfig.barChartOptions.scales.yAxes[0].ticks.max = Math.max.apply(null,  this.barAreaChartData.datasets[0].data);
      this.passwordsLoaded = true;

    });
  }

}
