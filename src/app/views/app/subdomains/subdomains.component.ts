import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ViewsService} from '../../../services/views.service';

@Component({
  selector: 'app-subdomains',
  templateUrl: './subdomains.component.html',
  styleUrls: ['./subdomains.component.scss']
})
export class SubdomainsComponent implements OnInit {
  domain: any;
  subdomainsInfo: any;
  data: Array<any>;
  
  constructor(private route: ActivatedRoute, private viewsService: ViewsService) { }

  ngOnInit(): void {
    this.domain = this.route.snapshot.paramMap.get('domain');
    // Subdomains
    this.viewsService.getData('subdomains').subscribe(res => {
      console.log("subdomains",res);
      for (const dom of Object.entries(res.subdomains)) {
        if (dom[0] === this.domain) {
          this.subdomainsInfo = dom[1];
          
        }
      }
       
    });
  }

}
