import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastTableComponent } from './forecast/forecast-table.component';
import { NewstudyTableComponent } from './newstudy/newstudy-table.component';
const routes: Routes = [
  { path: 'order-list', component: ForecastTableComponent },
  {path:'new-study', component: NewstudyTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandManagementRoutingModule { }
