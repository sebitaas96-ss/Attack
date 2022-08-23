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
  selector: 'app-apex-linear-chart-area-certificates',
  templateUrl: './apex-linear-chart-area-certificates.component.html',
  styleUrls: ['./apex-linear-chart-area-certificates.component.scss']
})
export class ApexLinearChartAreaCertificatesComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;

  domain: any;
  certificatesLoaded = false;
  certificatesInfo: any;

  constructor(private route: ActivatedRoute, private viewsService: ViewsService) {
    this.chartOptions = {
      series: [{
        name: 'Desktops',
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
        text: 'Certificates per year',
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


    this.viewsService.getData('certificates').subscribe(res => {
      for (const dom of Object.entries(res.certificates)) {
        if (dom[0] === this.domain) {
          for (const x of Object.entries(dom[1])) {
            this.certificatesInfo = x[1];
          }
          const years = [];
          for (const x of this.certificatesInfo){
            const timestpam = x.entry_timestamp.split('-');
            years.push(timestpam[0]);
            if (this.chartOptions.xaxis.categories.indexOf(timestpam[0]) === -1){
              this.chartOptions.xaxis.categories.push(timestpam[0]);
            }
          }
          for (let i = 0; i < this.chartOptions.xaxis.categories.length;i++){
            const result = years.filter(yearRepeated => yearRepeated === this.chartOptions.xaxis.categories[i]);
            this.chartOptions.series[0].data.push(result.length);
          }

          /*We do the reverse to see it sorted from smallest to largest year*/
          this.chartOptions.xaxis.categories.reverse();
          this.chartOptions.series[0].data.reverse();
          // this.chartDataConfig.barChartOptions.scales.yAxes[0].ticks.max = Math.max.apply(null,this.barCertificateChartData.datasets[0].data);
          this.certificatesLoaded = true;
        }
      }
    });
  }
}
