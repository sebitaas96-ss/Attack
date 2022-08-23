import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ViewsService} from '../../../services/views.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  @Input() data;
  domain: any;
  domainInfo: any;
  constructor(private route: ActivatedRoute, private viewsService: ViewsService) { }

  ngOnInit(): void {
    this.domain = this.route.snapshot.paramMap.get('domain');
    // DOMAIN
    this.viewsService.getData('domains').subscribe(res => {
      console.log(res);
      for (const dom of Object.entries(res.technologies)){
        if (dom[0] === this.domain){
          this.domainInfo = dom[1];
        }
      }
    });
  }

}
