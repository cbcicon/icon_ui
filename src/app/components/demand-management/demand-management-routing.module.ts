import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastTable } from './forecast/forecast-table';
import { NewstudyTableComponent } from './newstudy/newstudy-table.component';
import { MasterDemandPlanComponent } from './master-demand-management/master-demand-plan';

const routes: Routes = [
  { path: 'master-demand-plan', component: MasterDemandPlanComponent },
  { path: 'forecast', component: ForecastTable },
  {path:'new-study', component: NewstudyTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class DemandManagementRoutingModule { }
 