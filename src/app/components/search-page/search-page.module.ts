import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageTablesComponent } from './search-page-tables/search-page-tables.component';


@NgModule({
  declarations: [SearchPageTablesComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
