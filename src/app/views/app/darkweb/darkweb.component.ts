import { Component, OnInit } from '@angular/core';
import {ViewsService} from '../../../services/views.service';

@Component({
  selector: 'app-darkweb',
  templateUrl: './darkweb.component.html',
  styleUrls: ['./darkweb.component.scss']
})
export class DarkwebComponent implements OnInit {

  constructor(private viewsService: ViewsService) { }
  data: any;

  ngOnInit(): void {
    this.viewsService.getData('darkweb').subscribe(res => {
      this.data = res.darkweb;
    });
  }

}
