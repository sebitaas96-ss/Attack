import { Component, OnInit } from '@angular/core';
import {ViewsService} from '../../../services/views.service';

@Component({
  selector: 'app-abuses',
  templateUrl: './abuses.component.html',
  styleUrls: ['./abuses.component.scss']
})
export class AbusesComponent implements OnInit {
  displayMode = 'list';
  selectAllState = '';
  selected: any[] = [];
  dataReports: any;
  dataProfiles: any;

  constructor(private viewsService: ViewsService) { }

  ngOnInit(): void {
    this.viewsService.getData('abuses').subscribe(res => {

      this.dataReports = res.reports;
      this.dataProfiles = res.profiles;
    });
  }

}
