

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/auth.guard';
import { UserRole } from '../shared/auth.roles';
import {CreateCompanyComponent} from './createCompany/createCompany.component';

const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

let routes: Routes = [
  {
    path: '',
    redirectTo: '/user/login',
    pathMatch: 'full',
  },
  {
    path: adminRoot,
    loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
  },
  { path: 'createCompany', component: CreateCompanyComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: 'error', component: ErrorComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: '/error' },
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
    },
    {
      path: 'app',
      loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
    },
    {
      path: 'user',
      loadChildren: () =>
        import('./user/user.module').then((m) => m.UserModule),
    },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' },
  ];
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
