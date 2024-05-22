import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.html',
  styleUrls:['./purchase-order.scss']
})
export class PurchaseOrderComponent {

  constructor(private dataService: DataService ) {}

  purchaseOrderData :any
  loading: boolean = true

 ngOnInit(){
   this.purchaseOrderData = this.dataService.purchase_order_table
   setTimeout(() => {
     this.loading =  false
   },1000)
 }


}