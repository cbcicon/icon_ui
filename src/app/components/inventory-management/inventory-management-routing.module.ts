import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTableComponent } from './order-table/order-table.component';
import { PurchaseOrderTable } from './purchase-orders/purchase-order-table';

const routes: Routes = [
  { path: 'order-list', component: OrderTableComponent },
  { path: 'purchase-orders', component: PurchaseOrderTable }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryManagementRoutingModule { }
