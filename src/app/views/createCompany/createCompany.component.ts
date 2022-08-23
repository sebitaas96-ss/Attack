import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IUser} from '../../data/user';
import {CompanyService} from '../../services/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ISidebar} from '../../containers/layout/sidebar/sidebar.service';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../shared/auth.service';
import {StorageService} from '../../services/storage.service';


export interface ICreateCompany {
  name: string;
  email: string;
  phone: string;
  description: string;
  domains: string[];
  ip: string[];
}

@Component({
  selector: 'app-blank-page',
  templateUrl: './createCompany.component.html',
  styleUrls: ['./createCompany.component.scss']
})
export class CreateCompanyComponent{
  sidebar: ISidebar;
  @ViewChild('createCompanyForm') createCompanyForm: NgForm;
  @Input() title = 'Create Company';
  user: IUser;
  domains: string[] = [];
  ips: string[] = [];

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute,
              private userService: UserService, private authService: AuthService, private storageService: StorageService) {
    this.domains[0] =  this.getMainDomain();
  }

  onSubmit(form: NgForm): void {
    if (!this.createCompanyForm.valid) {
      return;
    }
    if (form.value.domain1 !== '') {
      this.domains.push(form.value.domain1);
    }
    if (form.value.domain2 !== '') {
      this.domains.push(form.value.domain2);
    }
    if (form.value.domain3 !== '') {
      this.domains.push(form.value.domain3);
    }
    if (form.value.domain4 !== '') {
      this.domains.push(form.value.domain4);
    }
    if (form.value.ip !== '') {
      this.ips.push(form.value.ip);
    }
    if (form.value.ip2 !== '') {
      this.ips.push(form.value.ip2);
    }
    if (form.value.ip3 !== '') {
      this.ips.push(form.value.ip3);
    }
    if (form.value.ip4 !== '') {
      this.ips.push(form.value.ip4);
    }
    console.log(this.domains);
    const newCompany: ICreateCompany = {
      name: form.value.name,
      email: this.userService.getUserData().email,
      phone: form.value.phone,
      description: form.value.description,
      domains: this.domains,
      ip: this.ips
    };
    console.log(newCompany);
    this.companyService.create(newCompany).subscribe(
      res => {
        console.log(res.data.id);
        this.userService.edit({
          id: this.authService.getUserData().id,
          company_id: res.data.id
        }).subscribe(resp => {
          const userData = resp.data;

          // comrpueba si se le ha asignado la compania
          if (!userData.company) {
            // mostrar error de que el proceso no se ha ejecutado correctamente y cortas la ejecucion

            return;
          }
          // No olvidarme de esto
          this.storageService.set('company', userData.company);
        });
        this.returnList();
      },
      error => {
        console.log(error);
      },
    );
  }

  returnList(): any {
    return this.router.navigate(['/app/dashboards/dashboard']);
  }
  getMainDomain(): string {
   return this.userService.getUserData().email.split('@')[1];
  }
  getMail(): string{
    return this.userService.getUserData().email;
  }


}
