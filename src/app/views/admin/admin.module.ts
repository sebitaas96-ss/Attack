import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from './admin.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import {BlankPageComponent} from './blank-page/blank-page.component';
import {SimpleNotificationsModule} from 'angular2-notifications';


@NgModule({
  declarations: [AdminComponent, BlankPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    SimpleNotificationsModule.forRoot()
  ]
})
export class AdminModule { }

