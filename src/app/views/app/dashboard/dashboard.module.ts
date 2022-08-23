import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import {DashboardsComponent} from './dashboard.component';
import {DashboardComponent} from './dashboard/dashboar.component';
import {DashboardsRoutingModule} from './dashboard.routing';
import {DashboardsContainersModule} from '../../../containers/dashboards/dashboards.containers.module';
import {ComponentsChartModule} from '../../../components/charts/components.charts.module';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DashboardsComponent, DashboardComponent],
    imports: [
        SharedModule,
        LayoutContainersModule,
        DashboardsRoutingModule,
        DashboardsContainersModule,
        ComponentsChartModule,
        RoundProgressModule,
        ReactiveFormsModule
    ]
})
export class DashboardsModule { }
