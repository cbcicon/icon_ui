import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevenueTableComponent } from './revenue/revenue-table.component';

const routes: Routes = [
  {path:'revenue', component: RevenueTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class RevenueManagementRoutingModule { }
 