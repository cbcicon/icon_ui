import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageTablesComponent } from './search-page-tables/search-page-tables.component';

const routes: Routes = [
  { path: 'search-page-table', component: SearchPageTablesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
   
  ],
  exports: [RouterModule]
})
export class SearchPageRoutingModule { }
