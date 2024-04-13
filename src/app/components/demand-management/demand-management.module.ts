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
import { DialogModule } from 'primeng/dialog'; 
import { QauntityBreakdownPopupComponent } from './popup/qauntity-breakdown-popup/qauntity-breakdown-popup.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { ItemSearchPopupComponent } from './popup/itemsearchpopup/item-search-popup.component';
import { CardModule } from 'primeng/card';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [OrderTableComponent , QauntityBreakdownPopupComponent , ItemSearchPopupComponent,ItemDetailsComponent],
  imports: [
    CommonModule,
    DemandManagementRoutingModule ,
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
		ToastModule ,
		PaginatorModule ,
		DialogModule ,
      DynamicDialogModule ,
	  SidebarModule ,
	  ChipModule ,
	  AccordionModule ,
	  ChartModule   ,
	  CardModule ,
	  PanelModule ,
	  SkeletonModule ,
	  ListboxModule,
	  TagModule ,
	  CalendarModule
  ] ,
  providers:[DialogService]
  
})
export class DemandManagementModule { }
