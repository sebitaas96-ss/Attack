import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NotificationsService, NotificationType} from 'angular2-notifications';
import {CompanyService, ICompany} from '../../../../services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Input() title = 'Edit Company';
  company: ICompany;
  formErrors: any = {};
  @ViewChild('editForm') editForm: NgForm;

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute,
              private notifications: NotificationsService) {
  }

  ngOnInit(): any {
    this.getData(this.route.snapshot.paramMap.get('id'));
  }
  getData(id: any): any{
    this.companyService.getCompany(id).subscribe(res => {
      this.company = res.data;
    });
  }
  onSubmit(form: NgForm): void {
    if (!this.editForm.valid) {
      return;
    }
    console.log(form.value.name);
    this.companyService.edit({
      name : form.value?.name,
      email : form.value?.email,
      phone : form.value?.phone,
      description : form.value?.description,
      id : this.company.id
      }).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/company/list']);
      },
      response => {
        this.formErrors = response.error.errors;
        console.log('easedas', response);
        this.notifications.create('Error', response.error.message,
          NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
      }
    );
  }
  returnList(): any{
    return this.router.navigate(['/admin/company/list']);
  }
}
