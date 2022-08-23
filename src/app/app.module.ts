import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {ViewsModule} from './views/views.module';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {LayoutContainersModule} from './containers/layout/layout.containers.module';
import {AuthInterceptor} from './shared/auth.interceptor';
import {NgSelectModule} from '@ng-select/ng-select';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {FormsModule} from '@angular/forms';
import {CreateCompanyComponent} from './views/createCompany/createCompany.component';
import {ArchwizardModule} from 'angular-archwizard';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgSelectModule,
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    ArchwizardModule,
    NgApexchartsModule
  ],
  declarations: [
    AppComponent,
    CreateCompanyComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
