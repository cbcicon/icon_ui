import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastTableComponent } from './forecast/forecast-table.component';

const routes: Routes = [
  { path: 'order-list', component: ForecastTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandManagementRoutingModule { }
