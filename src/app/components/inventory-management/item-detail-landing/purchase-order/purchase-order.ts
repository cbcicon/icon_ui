import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.html',
  styleUrls:['./purchase-order.scss']
})
export class PurchaseOrderComponent {

  constructor( public tableDataService:TableDataService  , public util : UtilService ) {}

  purchaseOrderData :any
  loading: boolean = true

 ngOnInit(){

  this.tableDataService.getPurchaseOrderTableData().subscribe((res:any) => {
  
    this.purchaseOrderData = res

    setTimeout(() => {
      this.loading =  false
    },1000)

  })
   
 }


}
