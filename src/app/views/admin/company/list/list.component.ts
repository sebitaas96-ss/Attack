import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import userData, {IUser} from '../../../../data/user';
import {Router} from '@angular/router';
import {CompanyService} from '../../../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Input() title = 'CompanyList';
  rows: IUser[];
  columns = [
    {prop: 'Email'},
    {name: 'Name'},
    {name: 'Phone'},
    {name: 'Description'},
    {name: 'id'}
  ];

  columnMode = ColumnMode;
  currentPage = 1;
  itemsPerPage = 7;
  totalItem = 0;
  totalPage = 0;

  constructor(private companyService: CompanyService, private router: Router) {
  }

  ngOnInit(): any {
    this.loadData();
  }

  deleteUser(id: any): any {
    this.companyService.delete(id).subscribe(res => {
      console.log(res);
      this.loadData();
    });
  }
  editCompany(id: any): any{
    this.router.navigate(['/admin/company/edit', id]);
  }
  createCompany(): any{
    this.router.navigate(['/admin/company/create']);
  }
  loadData(): any{
    this.companyService.getAll().subscribe(res => {
      this.rows = res.data;
      console.log(res.data);
    });
  }
  pageChanged(event: any): void {
    this.loadData();
  }


}
