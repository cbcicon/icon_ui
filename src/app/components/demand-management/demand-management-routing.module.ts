import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastTable } from './forecast/forecast-table';

const routes: Routes = [
  { path: 'forecast', component: ForecastTable }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandManagementRoutingModule { }
