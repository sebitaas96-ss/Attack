import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CompanyComponent } from './company.component';
import { UserListRoutingModule } from './company.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {WizardsContainersModule} from "../../../containers/wizard/wizards.containers.module";
import {ArchwizardModule} from "angular-archwizard";

@NgModule({
  declarations: [CompanyComponent, ListComponent, EditComponent, CreateComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    UserListRoutingModule,
    NgxDatatableModule,
    PaginationModule,
    FormsModule,
    SimpleNotificationsModule,
    WizardsContainersModule,
    ArchwizardModule
  ]
})
export class CompanyModule { }
