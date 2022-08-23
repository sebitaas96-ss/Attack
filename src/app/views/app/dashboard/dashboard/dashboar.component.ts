import {Component, OnInit} from '@angular/core';
import {ViewsService} from '../../../../services/views.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboar.component.html'
})
export class DashboardComponent  implements OnInit{
  basicForm: FormGroup;
  domains = [];
  constructor(private viewsService: ViewsService) { }

  ngOnInit(): any{
    this.viewsService.getObservables().subscribe(res => {
      console.log('Observables', res);
      for (const obs of res){
        if (obs.dataType === 'domain'){
          this.domains.push(obs);
        }
      }
    });

    this.basicForm = new FormGroup({
      domain: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }
  onSubmit(): any{
    console.log(this.basicForm.value);
    this.viewsService.createObservable({dataType: 'domain', data: this.basicForm.value.domain,
      message: 'Domain Observable for' + this.basicForm.value.domain}).subscribe(res => {
        console.log('createObservable', res);
        window.location.reload();
    },
      (err) => {
        console.log(err);
        if (err.status === 403){
          this.viewsService.addCase('mainCase').subscribe(res => {
            console.log('createCase', res);
            window.location.reload();
          });
          this.viewsService.createObservable({dataType: 'domain', data: this.basicForm.value.domain,
            message: 'Domain Observable for' + this.basicForm.value.domain}).subscribe(res => {
            console.log('createObservable', res);
            window.location.reload();
          });
        }
      });
  }

}
