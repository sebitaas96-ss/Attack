import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user.component';
import { UserListRoutingModule } from './user.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {NgSelectModule} from "@ng-select/ng-select";
import {BootstrapModule} from "../../../components/bootstrap/bootstrap.module";

@NgModule({
  declarations: [UserComponent, ListComponent, EditComponent, CreateComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    UserListRoutingModule,
    NgxDatatableModule,
    PaginationModule,
    FormsModule,
    SimpleNotificationsModule,
    NgSelectModule,
    BootstrapModule
  ]
})
export class UserModule { }
