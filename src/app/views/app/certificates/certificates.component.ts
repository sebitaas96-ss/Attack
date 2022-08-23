import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ViewsService} from '../../../services/views.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  domain: any;
  certificatesInfo: any;

  constructor( private route: ActivatedRoute, private viewsService: ViewsService) { }

  ngOnInit(): void {
    this.domain = this.route.snapshot.paramMap.get('domain');
    // DOMAIN
    this.viewsService.getData('certificates').subscribe(res => {
      for (const dom of Object.entries(res.ssl)) {
        if (dom[0] === this.domain) {
          for (const x of Object.entries(dom[1])) {
            this.certificatesInfo = x[1];
          }
        }
      }
   
    });
  }

}
