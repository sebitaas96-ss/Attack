import {Component, OnInit} from '@angular/core';
import {ViewsService} from '../../../services/views.service';


@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklists.component.html'
})
export class BlacklistsComponent  implements OnInit{

  displayMode = 'list';
  selectAllState = '';
  selected: any[] = [];
  data: any;
  constructor(private viewsService: ViewsService) { }
  ngOnInit(): any {
    this.viewsService.getData('servers_blacklists').subscribe(res => {
      if (res != null) {
        this.data = this.filterRes(res);
      }
    });
  }
  private filterRes(res): any{
    const filtered = {};

    // recorrer reports
    for (const index of Object.entries(res.reports)) {
      if (filtered[index[0]] === undefined){
        filtered[index[0]] = {};
      }
      filtered[index[0]].reports = index[1];
    }
    // recorrer spam_reports
    for (const index of Object.entries(res.spam_reports)) {
      if (filtered[index[0]] === undefined){
        filtered[index[0]] = {};
      }
      filtered[index[0]].spam_reports = index[1];
    }
    // recorrer tracker
    for (const index of Object.entries(res.tracker)) {
      if (filtered[index[0]] === undefined){
        filtered[index[0]] = {};
      }
      filtered[index[0]].tracker = index[1];
    }
    return filtered;
  }
  validateEmail(email): boolean {
    // console.log(email);
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
