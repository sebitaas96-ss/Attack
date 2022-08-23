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
  selector: 'app-apex-linear-chart-area-passwords',
  templateUrl: './apex-linear-chart-area.component.html',
  styleUrls: ['./apex-linear-chart-area.component.scss']
})
export class ApexLinearChartAreaPasswordsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;

  domain: any;

  passwordsInfo: any;
  passwordsInfoLoaded = false;

  contadorPass = 0;
  contadorHashedPass = 0;

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

    this.viewsService.getData('passwords').subscribe(res => {
      for (const dom of Object.entries(res.passwords)) {
        if (dom[0] === this.domain) {
          // @ts-ignore
          this.passwordsInfo = dom[1].entries;
        }
      }
      for(let i=0;i<this.passwordsInfo.length;i++){
        if(this.passwordsInfo[i]['password']!=""){
          this.contadorPass++;
        }
        if(this.passwordsInfo[i]['hashed_password']!=""){
          this.contadorHashedPass++
        }
      }
      this.chartOptions.xaxis.categories.push('Passwords');
      this.chartOptions.series[0].data.push(this.contadorPass);
      this.chartOptions.xaxis.categories.push('Hashed Passwords');
      this.chartOptions.series[0].data.push(this.contadorHashedPass);
      this.passwordsInfoLoaded = true;
    });

  }

}
