import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CompanyGuard} from '../../shared/company.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      {path: 'dashboards', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardsModule) },
      {path: 'details/:domain', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
