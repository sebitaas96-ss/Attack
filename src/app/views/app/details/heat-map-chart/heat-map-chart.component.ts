
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
  ApexYAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexDataLabels,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  toolTip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-heat-map-chart',
  templateUrl: './heat-map-chart.component.html',
  styleUrls: ['./heat-map-chart.component.scss']
})
export class HeatMapChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: any;
  public colors: any;

  constructor() {
      this.chartOptions = {
        series: [
          {
            name: 'Low',
            data: [
              {
                x: 'Minor',
                z: 631,
                y: 0,
              },
              {
                x: 'Moderate',
                z: 343,
                y: 1,
              },
              {
                x: 'Material',
                z: 144,
                y: 2,
              },
              {
                x: 'Severe',
                z: 41,
                y: 2,
              },
            ],
          },
          {
            name: 'Medium',
            data: [
              {
                x: 'Minor',
                z: 76,
                y: 0,
              },
              {
                x: 'Moderate',
                z: 42,
                y: 1,
              },
              {
                x: 'Material',
                z: 7,
                y: 2,
              },
              {
                x: 'Severe',
                z: 4,
                y: 3,
              },
            ],
          },
          {
            name: 'High',
            data: [
              {
                x: 'Minor',
                z: 1069,
                y: 0,
              },
              {
                x: 'Moderate',
                z: 576,
                y: 1,
              },
              {
                x: 'Material',
                z: 70,
                y: 2,
              },
              {
                x: 'Severe',
                z: 19,
                y: 3,
              },
            ],
          },
          {
            name: 'Critical',
            data: [
              {
                x: 'Minor',
                z: 783,
                y: 0,
              },
              {
                x: 'Moderate',
                z: 461,
                y: 1,
              },
              {
                x: 'Material',
                z: 45,
                y: 3,
              },
              {
                x: 'Severe',
                z: 15,
                y: 3,
              },
            ],
          },
        ],
        chart: {
          height: 350,
          type: 'heatmap',
        },
        title: {
          text: 'Risk Priority Index',
        },
        plotOptions: {
          heatmap: {
            enableShades: false,
            distributed: true,
            useFillColorAsStroke: false,
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 0,
                  color: '#92d14f',
                  foreColor: 'black',
                  name: 'Good',
                },
                {
                  from: 1,
                  to: 1,
                  color: '#feff03',
                  foreColor: 'black',
                  name: 'Low',
                },
                {
                  from: 2,
                  to: 2,
                  color: '#ffc000',
                  foreColor: 'black',
                  name: 'Warning',
                },
                {
                  from: 3,
                  to: 3,
                  color: '#fc0100',
                  name: 'Danger',
                },
              ],
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetY: -5,
          formatter: function (val, { seriesIndex, dataPointIndex, w }) {
            //console.log("El formater:",w,val);
            return [w.config.series[seriesIndex].data[dataPointIndex].z,'findings'];
          },
          style: {
            fontSize: '14px',
          },
        },
        tooltip: {
          x: {
            show: true,
          },
          y: {
            formatter: function (value, { seriesIndex, dataPointIndex, w }) {
              //console.log( "Y formater:", w)
              return w.config.series[seriesIndex].data[dataPointIndex].z;
            },
          },
          z: {
            formatter: function (value) {
              return null;
            },
            title: {
              formatter: function (value) {
                return null;
              },
            },
          },
        },
        xaxis: {
          title: {
            text: "Finding Severity",
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
            }
          }
        },
        yaxis: {
          title: {
            text: "Asset Importance",
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
            }
          }
        }
      };
    }
  
  ngOnInit(): void {
  
  }

}
