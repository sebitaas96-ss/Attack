import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartService} from '../../../../services/chart.service';
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
  selector: 'app-apex-line-chart-monthly-evolution',
  templateUrl: './apex-line-chart-monthly-evolution.component.html',
  styleUrls: ['./apex-line-chart-monthly-evolution.scss']
})
export class ApexLineChartMonthlyEvolutionComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;

  constructor(private route: ActivatedRoute, private viewsService: ViewsService) {
    this.chartOptions = {
      series: [{
        name: 'Naturgy',
        data: [3.3, 3.4, 3.7, 4.4, 4.9, 5.1, 5.3]
      }, {
        name: 'Indrustry',
        data: [6.0, 6.1, 6.4, 6.9, 6.8, 7.0, 7.2]
      }],
      chart: {
        height: 350,
        type: 'line',
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
        text: 'Product Trends by Month',
        align: 'left'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {
        min: 0,
        max: 10,
        tickAmount: 10
      },
      grid: {
        row: {
          colors: ['green', '#b9f5a2', '#f1f731', '#f7a531', '#f7a531', '#f20707', '#f20707', '#f20707', '#f20707', '#f20707']
        }
      },
    };


  }

  ngOnInit(): void {
  }

}
