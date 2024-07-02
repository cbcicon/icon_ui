
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
import { OrderTableComponent } from './order-table/order-table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { QauntityBreakdownPopupComponent } from './popup/qauntity-breakdown-popup/qauntity-breakdown-popup';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { ItemSearchPopupComponent } from './popup/itemsearchpopup/item-search-popup';
import { CardModule } from 'primeng/card';
import { ItemDetailsComponent } from './item-details/item-details';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ItemDetailLandingComponent } from './item-detail-landing/item-detail-landing';
import { StockAndScrapComponent } from './item-detail-landing/stock-and-scrap/stock-and-scrap';
import { RingFenceComponent } from './item-detail-landing/ring-fence/ring-fence';
import { ReplacementComponent } from './item-detail-landing/replacement/replacement';
import { PurchaseOrderComponent } from './item-detail-landing/purchase-order/purchase-order';
import { SharedModule } from '../../shared/shared.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AvatarModule } from 'primeng/avatar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SafetyStockComponent } from './safety-stock/safety-stock';
import { ScrapComponent } from './scrap/scrap';
import { InventoryPurchaseOrderComponent } from './inventory-purchase-order/inventory-purchase-order';
import { InventoryConfigurationComponent } from './inventory-configuration/inventory-configuration';

import { PanelMenuModule } from 'primeng/panelmenu';
import { InvConfigItemComponent } from './inventory-configuration/inv-config-item/inv-config-item';
import { InvConfigSafetyStockComponent } from './inventory-configuration/inv-config-safety-stock/inv-config-safety-stock';
import { InvConfigSelfLifeComponent } from './inventory-configuration/inv-config-self-life/inv-config-self-life';
import { InvConfigPurchaseOrderComponent } from './inventory-configuration/inv-config-purchase-order/inv-config-purchase-order';


@NgModule({
	declarations: [
		OrderTableComponent, QauntityBreakdownPopupComponent, ItemSearchPopupComponent, ItemDetailsComponent, ItemDetailLandingComponent,
		StockAndScrapComponent, RingFenceComponent, ReplacementComponent, PurchaseOrderComponent , SafetyStockComponent , ScrapComponent,
		InventoryPurchaseOrderComponent ,InventoryConfigurationComponent , InvConfigItemComponent ,InvConfigSafetyStockComponent,
		InvConfigSelfLifeComponent,InvConfigPurchaseOrderComponent
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
		InputTextareaModule,
		PanelMenuModule
	],
	providers: [DialogService]

})
export class InventoryManagementModule { }
