import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import userData, {IUser} from '../../../../data/user';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NotificationsService, NotificationType} from 'angular2-notifications';
import {CompanyService} from '../../../../services/company.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Input() title = 'Edit User';
  user: IUser;
  formErrors: any = {};
  @ViewChild('editForm') editForm: NgForm;
  companies;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
              private notifications: NotificationsService, private companyService: CompanyService) {
  }

  ngOnInit(): any {
    this.getData(this.route.snapshot.paramMap.get('id'));
    this.loadCompanies();
  }

  getData(id: any): any {
    this.userService.getUser(id).subscribe(res => {
      this.user = res.data;
    });
  }

  onSubmit(form: NgForm): void {
    if (!this.editForm.valid) {
      return;
    }
    console.log(form.value.name);
    this.userService.edit({
      id: this.user.id,
      name: form.value?.name,
      password: form.value?.password,
      password_confirmation: form.value?.password_confirmation,
      company_id: form.value?.company_id,
    }).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/user/list']);
      },
      response => {
        this.formErrors = response.error.errors;
        this.notifications.create('Error', response.error.message,
          NotificationType.Bare, {theClass: 'outline primary', timeOut: 6000, showProgressBar: false});
      }
    );
  }

  returnList(): any {
    return this.router.navigate(['/admin/user/list']);
  }

  loadCompanies(): any {
    this.companyService.getAll().subscribe(res => {
      this.companies = res.data;
      console.log(res.data);
    });
  }
}
