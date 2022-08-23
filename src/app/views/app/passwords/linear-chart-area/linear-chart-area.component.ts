import {Component, Input, OnInit} from '@angular/core';
import { ChartService } from '../../../../services/chart.service';
import {Colors} from '../../../../constants/colors.service';
import {ViewsService} from '../../../../services/views.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-linear-chart-area-passwords',
  templateUrl: './linear-chart-area.component.html',
  styleUrls: ['./linear-chart-area.component.scss']
})
export class LinearChartAreaPasswordsComponent  implements OnInit{
  @Input() chartClass = 'dashboard-donut-chart';

  chartDataConfig: ChartService;
  domain: any;
  subdomainsInfo: any;
  passwordsInfo: any;
  passwordsLoaded = false;
  barAreaChartDataPasswords = {
    labels: [],
    datasets: [
      {
        label: 'Passwords Analyzed',
        data: [],
        borderWidth: 2,
        borderColor: [Colors.getColors().themeColor1, Colors.getColors().themeColor2, Colors.getColors().themeColor3],
        backgroundColor: [
          Colors.getColors().themeColor1_10,
          Colors.getColors().themeColor2_10,
          Colors.getColors().themeColor3_10
        ]
      }
    ]
  };
  contadorPass=0;
  contadorHashedPass = 0;
  
  constructor(private chartService: ChartService, private route: ActivatedRoute, private viewsService: ViewsService) {
    this.chartDataConfig = this.chartService;
    
  }

ngOnInit(): any {

  this.domain = this.route.snapshot.paramMap.get('domain');
  this.viewsService.getData('passwords').subscribe(res => {

    console.log('pwd', res)
    
    for (const dom of Object.entries(res.passwords)) {
      if (dom[0] === this.domain) {
        this.passwordsInfo = dom[1]['entries'];
        console.log('passwords info: ',this.passwordsInfo);
        
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
  
    console.log('contador hash',this.contadorHashedPass);
    this.barAreaChartDataPasswords.labels.push('Passwords');
    this.barAreaChartDataPasswords.datasets[0].data.push(this.contadorPass);

    this.barAreaChartDataPasswords.labels.push('Hashed Passwords');
    this.barAreaChartDataPasswords.datasets[0].data.push(this.contadorHashedPass);
    console.log('-----',this.barAreaChartDataPasswords.datasets[0]);
    this.chartDataConfig.barChartOptions.scales.yAxes[0].ticks.max = Math.max.apply(null,  this.barAreaChartDataPasswords.datasets[0].data);
    this.passwordsLoaded = true;
  });
}

}
