import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTableComponent } from './order-table/order-table';
import { SafetyStockComponent } from './safety-stock/safety-stock';
import { ScrapComponent } from './scrap/scrap';
import { InventoryPurchaseOrderComponent } from './inventory-purchase-order/inventory-purchase-order';
import { InventoryConfigurationComponent } from './inventory-configuration/inventory-configuration';

const routes: Routes = [
  { path: 'order-list', component: OrderTableComponent },
  { path: 'safety-stock', component: SafetyStockComponent },
  { path: 'scrap', component: ScrapComponent },
  { path: 'inventory-purchase-order', component: InventoryPurchaseOrderComponent },
  { path: 'inventory-configuration', component: InventoryConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryManagementRoutingModule { }
