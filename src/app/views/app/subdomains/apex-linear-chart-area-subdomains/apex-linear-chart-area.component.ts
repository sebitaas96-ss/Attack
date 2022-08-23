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
  selector: 'app-apex-linear-chart-area-subdomains',
  templateUrl: './apex-linear-chart-area.component.html',
  styleUrls: ['./apex-linear-chart-area.component.scss']
})
export class ApexLinearChartAreaSubdomainsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;

  domain: any;

  subdomainsInfo: any;
  subdomainsLoaded = false;

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

    this.viewsService.getData('subdomains').subscribe(res => {
      for (const dom of Object.entries(res.subdomains)) {
        if (dom[0] === this.domain) {
          this.subdomainsInfo = dom[1];
        }
      }
      this.chartOptions.xaxis.categories.push('Total Subdomains');
      this.chartOptions.series[0].data.push(this.subdomainsInfo.length);

      for (const srcs of this.subdomainsInfo){
        // tslint:disable-next-line:triple-equals
        if (this.sources.indexOf(srcs.source) == -1){
          this.sources.push(srcs.source);
          this.sourcesRepeated.push(1);
        }
        else{
          this.sourcesRepeated[this.sources.indexOf(srcs.source)]++;

        }

      }

      for(let i = 0; i < this.sources.length; i++){
        this.chartOptions.xaxis.categories.push(this.sources[i]);
        this.chartOptions.series[0].data.push(this.sourcesRepeated[i]);
      }

      this.subdomainsLoaded = true;
    });

  }

}
