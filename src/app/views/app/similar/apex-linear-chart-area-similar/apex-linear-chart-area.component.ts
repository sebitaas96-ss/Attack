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
  selector: 'app-apex-linear-chart-area-similar',
  templateUrl: './apex-linear-chart-area.component.html',
  styleUrls: ['./apex-linear-chart-area.component.scss']
})
export class ApexLinearChartAreaSimilarComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;

  domain: any;

  similarDomainsInfo: any;
  similarDomainsLoaded = false;

  sources: Array<any> = [];
  sourcesRepeated: Array<any> = [];

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
        text: 'Subdomains Sources',
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

    this.viewsService.getData('similar_domains').subscribe(res => {
      for (const dom of Object.entries(res.similar_domains)) {
        if (dom[0] === this.domain) {
          this.similarDomainsInfo = dom[1];

          Object.keys(this.similarDomainsInfo).forEach(e => {
            this.chartOptions.xaxis.categories.push(e);
            this.chartOptions.series[0].data.push(this.similarDomainsInfo[e].length);
          });
        }
      }
      this.similarDomainsLoaded = true;
    });

  }

}
