import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import userData, {IUser} from '../../../../data/user';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NotificationsService, NotificationType} from 'angular2-notifications';
import {AuthService} from '../../../../shared/auth.service';
import {CompanyService} from '../../../../services/company.service';


export interface ICreateCompany {
  name: string;
  email: string;
  phone: string;
  description: string;
  domains: string[];
  ip: string[];
}

@Component({
  selector: 'app-create-company',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  @ViewChild('createCompanyForm') createCompanyForm: NgForm;
  @Input() title = 'Create Company';
  user: IUser;
  domains: string[] = [];
  ips: string[] = [];
    constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {
  }
  onSubmit(form: NgForm): void {
    if (!this.createCompanyForm.valid) {
      return;
    }
    if (form.value.domain1 !== ''){
      this.domains.push(form.value.domain1);
    }
    if (form.value.domain2 !== ''){
      this.domains.push(form.value.domain2);
    }
    if (form.value.domain3 !== ''){
      this.domains.push(form.value.domain3);
    }
    if (form.value.domain4 !== ''){
      this.domains.push(form.value.domain4);
    }
    if (form.value.ip !== ''){
      this.ips.push(form.value.ip);
    }
    if (form.value.ip2 !== ''){
      this.ips.push(form.value.ip2);
    }
    if (form.value.ip3 !== ''){
      this.ips.push(form.value.ip3);
    }
    if (form.value.ip4 !== ''){
      this.ips.push(form.value.ip4);
    }
    console.log(this.domains);
    const newCompany: ICreateCompany = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      description: form.value.description,
      domains: this.domains,
      ip: this.ips
    };
    console.log(newCompany);
    this.companyService.create(newCompany).subscribe(
      res => {
        this.returnList();
      },
      error => {
        console.log(error);
      }
    );
  }
  returnList(): any{
    return this.router.navigate(['/admin/company/list']);
  }
}
