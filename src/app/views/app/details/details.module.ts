import { NgModule } from '@angular/core';
import { DetailsRoutingModule } from './details.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {DetailsComponent} from './details.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {ComponentsChartModule} from '../../../components/charts/components.charts.module';
import {AppModule} from '../app.module';
import {ComponentsCardsModule} from '../../../components/cards/components.cards.module';
import {ApexLinearChartAreaComponent} from './apex-linear-chart-area/apex-linear-chart-area.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { HeatMapChartComponent } from './heat-map-chart/heat-map-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import {ApexRadarChartAreaComponent} from './apex-radar-chart-area/apex-radar-chart-area.component';
import {  ApexLineChartMonthlyEvolutionComponent} from './apex-line-chart-monthly-evolution/apex-line-chart-monthly-evolution';



@NgModule({
  declarations: [DetailsComponent, ApexRadarChartAreaComponent, ApexLineChartMonthlyEvolutionComponent,
     ApexLinearChartAreaComponent, HeatMapChartComponent,
    StackedBarChartComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    DetailsRoutingModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    ContextMenuModule.forRoot(),
    RoundProgressModule,
    ComponentsChartModule,
    AppModule,
    ComponentsCardsModule,
    NgApexchartsModule
  ],

  exports: [

    CollapseModule,
    AccordionModule

  ]
})
export class DetailsModule { }
