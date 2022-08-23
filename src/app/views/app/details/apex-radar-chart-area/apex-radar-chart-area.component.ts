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
  selector: 'app-apex-radar-chart-area',
  templateUrl: './apex-radar-chart-area.component.html',
  styleUrls: ['./apex-radar-chart-area.component.scss']
})
export class ApexRadarChartAreaComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;

  constructor(private route: ActivatedRoute, private viewsService: ViewsService) {
    this.chartOptions = {
      series: [{
        name: 'Industry',
        data: [5.7, 5.7, 6.2, 7.3, 6.7, 2.6, 3.5, 4.7, 6.2, 5.4]
      },
        {
          name: 'Naturgy',
          data: [6.1, 6.5, 10, 6.2, 9.5, 7.3, 6.9, 5.7, 6.4, 6.5]
        }],
      chart: {
        height: 450,
        type: 'radar',
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
        categories: ['Domains', 'Subdomains', 'IPs', 'Vulnerabilities', 'Credentials exposed', 'Documents Exposed', 'Certificates', 'Social Networks',
        'Darkweb', 'Cloud Services' ],
      }
    };

  }

  ngOnInit(): void {
  }

}
