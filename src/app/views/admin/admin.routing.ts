import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import {AuthGuard} from '../../shared/auth.guard';
import {CompanyGuard} from '../../shared/company.guard';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        canActivateChild: [CompanyGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'user' },
            { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
            { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
