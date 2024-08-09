import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { StudyPlanningTableComponent } from './studyplanning/studyplanning-table.component';
import { StudyDetailLandingComponent } from './study-detail-landing/study-detail-landing.component';
import { LiveStudyDetailLandingComponent } from './live-study-detail-landing/live-study-detail-landing.component';
import { CountriesComponent } from './study-detail-landing/countries/countries.component';
import { SitesComponent } from './study-detail-landing/sites/sites.component';
import { InventoryReviewComponent } from './study-detail-landing/inventory-review/inventory-review.component';
import { SummaryComponent } from './study-detail-landing/summary/summary.component';
import { MasterDemandPlanComponent } from './master-demand-management/master-demand-plan';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from '../../shared/shared.module';
import { LiveCountriesComponent } from './live-study-detail-landing/livecountries/livecountries.component';
import { LiveSitesComponent } from './live-study-detail-landing/livesites/livesites.component';
import { LiveVisitsComponent } from './live-study-detail-landing/livevisits/livevisits.component';
import { LiveWorkOrdersComponent } from './live-study-detail-landing/liveworkorders/liveworkorders.component';
import { LiveKitsComponent } from './live-study-detail-landing/livekits/livekits.component';
import { DmConfigurationComponent } from './dm-configuration/dm-configuration.component';
import { DmKitConfigComponent } from './dm-configuration/dm-kit-config/dm-kit-config.component';

@NgModule({
	declarations: [
		ForecastTable, ForecastChart, StudyPlanningTableComponent, StudyDetailLandingComponent, CountriesComponent, SitesComponent, InventoryReviewComponent,
		 SummaryComponent,MasterDemandPlanComponent, LiveStudyDetailLandingComponent,LiveCountriesComponent,LiveSitesComponent,LiveVisitsComponent
		 ,LiveWorkOrdersComponent,LiveKitsComponent,DmConfigurationComponent ,DmKitConfigComponent],
	imports: [
		ReactiveFormsModule,
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
		SplitButtonModule ,
		SelectButtonModule,
		InputTextareaModule,
		AvatarModule,
		SharedModule
	],
	providers: [DialogService]

})
export class DemandManagementModule { }
