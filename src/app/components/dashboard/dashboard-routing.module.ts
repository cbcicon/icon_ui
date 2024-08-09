import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardMicroComponent } from './dashboard-micro/dashboard-micro';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardMicroComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
