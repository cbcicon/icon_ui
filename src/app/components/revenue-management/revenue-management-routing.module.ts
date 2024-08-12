import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevenueTableComponent } from './revenue/revenue-table.component';
import { RevenueConfigurationComponent } from './revenue-configuration/revenue-configuration.component';

const routes: Routes = [
  {path:'revenue', component: RevenueTableComponent},
  { path: 'revenue-configuration', component: RevenueConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class RevenueManagementRoutingModule { }
 