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
import { ForecastTable } from './forecast/forecast-table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ForecastChart } from './forecast/chart/forecast-chart';
import { NewstudyTableComponent } from './newstudy/newstudy-table.component';

@NgModule({
	declarations: [
		ForecastTable, ForecastChart, NewstudyTableComponent
	],
	imports: [
		CommonModule,
		DemandManagementRoutingModule,
		DividerModule,
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
		ToastModule,
		PaginatorModule,
		DialogModule,
		DynamicDialogModule,
		SidebarModule,
		ChipModule,
		AccordionModule,
		ChartModule,
		CardModule,
		PanelModule,
		SkeletonModule,
		ListboxModule,
		TagModule,
		CalendarModule,
		MenuModule,
		SplitButtonModule
	],
	providers: [DialogService]

})
export class DemandManagementModule { }