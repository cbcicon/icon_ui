import { Component, Input } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.html',
  styleUrls:['./purchase-order.scss']
})
export class PurchaseOrderComponent {


  @Input() itemData:any;

  constructor( public tableDataService:TableDataService  , public util : UtilService ) {}

  purchaseOrderData :any
  loading: boolean = true

  headerValues :any = {
    uniqueSponsors: '',
    uniqueItems:'',
    uniqueStatusYes:''
}

 ngOnInit(){

  this.tableDataService.getPurchaseOrderTableData().subscribe((res:any) => {
  
    this.purchaseOrderData = res.filter((x:any) => x.item === this.itemData.item)

    this.headerValues = this.countTotalOfHeader( this.purchaseOrderData)

    setTimeout(() => {
      this.loading =  false
    },1000)

  })
   
 }


 countTotalOfHeader(data:any) {
  const uniqueSponsors = new Set();
  const uniqueItems = new Set();
  const uniqueStatusYes = new Set();

  data.forEach((entry:any) => {
      uniqueSponsors.add(entry.sponsor);
      uniqueItems.add(entry.item);
      uniqueStatusYes.add(entry.status);
  });

  return {
      uniqueSponsors: uniqueSponsors.size,
      uniqueItems: uniqueItems.size,
      uniqueStatusYes: uniqueStatusYes.size
  };
}


}
