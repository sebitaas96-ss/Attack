import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Colors } from 'src/app/constants/colors.service';
import {ViewsService} from '../../../services/views.service';
@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {

  domain: any;
  similarDomainsInfo: any;
  barAreaChartData = {
    labels: [],
    datasets: [
      {
        label: 'Number of similar domains',
        data: [],
        borderWidth: 2,
        borderColor: [Colors.getColors().themeColor1, Colors.getColors().themeColor2, Colors.getColors().themeColor3, Colors.getColors().themeColor4, Colors.getColors().themeColor5, Colors.getColors().themeColor6],
        backgroundColor: [
          Colors.getColors().themeColor1_10,
          Colors.getColors().themeColor2_10,
          Colors.getColors().themeColor3_10,
          Colors.getColors().themeColor4_10,
          Colors.getColors().themeColor5_10,
          Colors.getColors().themeColor6_10,
        ]
      }
    ]
  };

  constructor(private route: ActivatedRoute, private viewsService: ViewsService) { 
  }

  ngOnInit(): void {
    this.domain = this.route.snapshot.paramMap.get('domain');
    this.viewsService.getData('similar_domains').subscribe(res => {
      for (const dom of Object.entries(res.similar_domains)) {
        if (dom[0] === this.domain) {
          this.similarDomainsInfo = dom[1];
        }
      }
    });
  }

}
