import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { DemandManagementRoutingModule } from './demand-management-routing.module';
import { TableModule } from 'primeng/table';
import { OrderTableComponent } from './order-table/order-table.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [OrderTableComponent],
  imports: [
    CommonModule,
    DemandManagementRoutingModule ,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule ,
		PaginatorModule
  ] ,
  
})
export class DemandManagementModule { }
