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
import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
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
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ItemDetailLandingComponent } from './item-detail-landing/item-detail-landing.component';
import { StockAndScrapComponent } from './item-detail-landing/stock-and-scrap/stock-and-scrap.component';
import { RingFenceComponent } from './item-detail-landing/ring-fence/ring-fence.component';
import { ReplacementComponent } from './item-detail-landing/replacement/replacement.component';
import { PurchaseOrderComponent } from './item-detail-landing/purchase-order/purchase-order.component';
import { SharedModule } from '../../shared/shared.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AvatarModule } from 'primeng/avatar';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
	declarations: [
		OrderTableComponent, QauntityBreakdownPopupComponent, ItemSearchPopupComponent, ItemDetailsComponent, ItemDetailLandingComponent,
		StockAndScrapComponent, RingFenceComponent, ReplacementComponent, PurchaseOrderComponent
	],
	imports: [
		CommonModule,
		InventoryManagementRoutingModule,
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
		SharedModule ,
		RadioButtonModule ,
		AvatarModule,
		InputTextareaModule
	],
	providers: [DialogService]

})
export class InventoryManagementModule { }
