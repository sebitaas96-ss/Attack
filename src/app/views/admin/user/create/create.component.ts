import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import userData, {IUser} from '../../../../data/user';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NotificationsService, NotificationType} from 'angular2-notifications';
import {AuthService} from '../../../../shared/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  @ViewChild('createUserForm') createUserForm: NgForm;
  @Input() title = 'Create User';
  user: IUser;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }
  onSubmit(form: NgForm): void {
    if (!this.createUserForm.valid) {
      return;
    }
    console.log(form.value);
    this.authService.register(form.value).subscribe(
      res => {
        this.returnList();
      },
      error => {
        console.log(error);
      }
    );
  }
  returnList(): any{
    return this.router.navigate(['/admin/user/list']);
  }
}
