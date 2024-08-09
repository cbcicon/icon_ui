import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastTable } from './forecast/forecast-table';
import { StudyPlanningTableComponent } from './studyplanning/studyplanning-table.component';
import { MasterDemandPlanComponent } from './master-demand-management/master-demand-plan';
import { DmConfigurationComponent } from './dm-configuration/dm-configuration.component';

const routes: Routes = [
  { path: 'master-demand-plan', component: MasterDemandPlanComponent },
  { path: 'forecast', component: ForecastTable },
  {path:'study-planning', component: StudyPlanningTableComponent},
  {path:'dm-configuration',component:DmConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class DemandManagementRoutingModule { }
 