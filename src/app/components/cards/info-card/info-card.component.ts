import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
})
export class InfoCardComponent {

  @Input() title = 'title';
  @Input() value = 'value';
  @Input() isSortable = false;
  @Input() class = '';
  @Input() isDomain = false;


  constructor() { }



}
