import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageTablesComponent } from './search-page-tables/search-page-tables.component';
import { ImportsModule } from '../../import';


@NgModule({
  declarations: [SearchPageTablesComponent],
  imports: [
    CommonModule,
    ImportsModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
