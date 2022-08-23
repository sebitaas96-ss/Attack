import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import userData, {IUser} from '../../../../data/user';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Input() title = 'UserList';
  rows: IUser[];
  columns = [
    {prop: 'Email'},
    {name: 'Name'},
    {name: 'Password'},
    {name: 'id'}
  ];

  columnMode = ColumnMode;
  currentPage = 1;
  itemsPerPage = 7;
  totalItem = 0;
  totalPage = 0;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): any {
    this.loadData();
  }

  deleteUser(id: any): any {
    this.userService.delete(id).subscribe(res => {
      console.log(res);
      this.loadData();
    });
  }
  editUser(id: any): any{
    this.router.navigate(['/admin/user/edit', id]);
  }
  createUser(): any{
    this.router.navigate(['/admin/user/create']);
  }
  loadData(): any{
    this.userService.getAll().subscribe(res => {
      this.rows = res.data;
      console.log(res.data);
    });
  }
  pageChanged(event: any): void {
    this.loadData();
  }


}
