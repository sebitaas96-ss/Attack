import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ViewsService} from '../../../services/views.service';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {
  domain: any;
  passwordsInfo: any;
  loaded = false;
  constructor(private route: ActivatedRoute, private viewsService: ViewsService) { }

  ngOnInit(): void {
    this.domain = this.route.snapshot.paramMap.get('domain');
    this.viewsService.getData('passwords').subscribe(res => {
      for (const dom of Object.entries(res.passwords)) {
        if (dom[0] === this.domain) {
          this.passwordsInfo = dom[1];
          this.loaded = true;
        }
      }
    });
  }

}
