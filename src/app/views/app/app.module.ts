import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import {WizardsContainersModule} from '../../containers/wizard/wizards.containers.module';
import {ArchwizardModule} from 'angular-archwizard';
import {FormsModule} from '@angular/forms';
import {ComingsoonComponent} from './comingsoon/comingsoon.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import { DomainComponent } from './domain/domain.component';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import { CertificatesComponent } from './certificates/certificates.component';
import { SubdomainsComponent } from './subdomains/subdomains.component';
import { SimilarComponent } from './similar/similar.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { DarkwebComponent } from './darkweb/darkweb.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import {BlacklistsComponent} from './blacklists/blacklists.component';
import { AbusesComponent } from './abuses/abuses.component';
import {ComponentsChartModule} from '../../components/charts/components.charts.module';

import {LinearChartAreaPasswordsComponent} from './passwords/linear-chart-area/linear-chart-area.component';
import {ApexLinearChartAreaCertificatesComponent} from './certificates/apex-linear-chart-area-certificates/apex-linear-chart-area-certificates.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ApexLinearChartAreaSubdomainsComponent} from './subdomains/apex-linear-chart-area-subdomains/apex-linear-chart-area.component';
import {ApexLinearChartAreaSimilarComponent} from './similar/apex-linear-chart-area-similar/apex-linear-chart-area.component';
import {ApexLinearChartAreaPasswordsComponent} from './passwords/apex-linear-chart-area-passwords/apex-linear-chart-area.component';

@NgModule({
  declarations: [AppComponent, ComingsoonComponent, DomainComponent, CertificatesComponent,
    SubdomainsComponent, SimilarComponent, PasswordsComponent, DarkwebComponent, BlacklistsComponent,
    AbusesComponent,
    LinearChartAreaPasswordsComponent, ApexLinearChartAreaCertificatesComponent, ApexLinearChartAreaSubdomainsComponent,
    ApexLinearChartAreaSimilarComponent, ApexLinearChartAreaPasswordsComponent],
  exports: [
    ComingsoonComponent,
    DomainComponent,
    CertificatesComponent,
    SubdomainsComponent,
    SimilarComponent,
    PasswordsComponent,
    DarkwebComponent,
    BlacklistsComponent,
    AbusesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    WizardsContainersModule,
    FormsModule,
    ArchwizardModule,
    AccordionModule,
    ContextMenuModule,
    ComponentsChartModule,
    NgApexchartsModule
  ]
})
export class AppModule { }

