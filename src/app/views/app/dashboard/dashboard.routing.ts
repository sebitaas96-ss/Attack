import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardsComponent} from './dashboard.component';
import {DashboardComponent} from './dashboard/dashboar.component';

const routes: Routes = [
    {
        path: '', component: DashboardsComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
