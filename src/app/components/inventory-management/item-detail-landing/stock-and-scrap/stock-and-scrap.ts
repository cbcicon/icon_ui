import { Component, Input } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-stock-and-scrap',
  templateUrl: './stock-and-scrap.html',
  styleUrls:['./stock-and-scrap.scss']
})
export class StockAndScrapComponent {


  @Input() totalAcessStock:any
  @Input() scrapValueEach:any
  

  constructor(public tableDataService :TableDataService , public util:UtilService ) {}

  stockAndScrap :any
  loading: boolean = true
  
  ringFenceData :any;
  totalRingFenced:any = 0;
  totalVolumeAndScrap:any = 0
  scrapValue:any


 ngOnInit(){

  this.tableDataService.getStockScrapTableData().subscribe((res:any) => {
    this.stockAndScrap = res;
    this.calculateToalScrapVolume()
    this.loading =  false
  })

  this.tableDataService.getRingFenceMainData().subscribe((res:any) => {
    this.ringFenceData = res;

    setTimeout(() => {
      this.calculateTotalRingFence(this.totalVolumeAndScrap ,res )
    },1000)
  })
  

   setTimeout(() => {
     this.loading =  false
     if(this.scrapValueEach && this.totalVolumeAndScrap){

      this.scrapValue = this.scrapValueEach*this.totalVolumeAndScrap
    }
   },1000)


  

 }


 calculateTotal(location: string) {
  let total = 0;

  if (this.stockAndScrap) {
      for (let customer of this.stockAndScrap) {
          if (customer.location === location) {
              total = total + customer.totalQty;
          }
      }
  }

  return total;
}




calculateToalScrapVolume() {
  let sum = 0;
  this.stockAndScrap.forEach((item:any) => {
      sum += item.totalQty;
  });

  this.totalVolumeAndScrap = sum
}




calculateTotalRingFence(volScrap:any ,data:any) {
  let sum = 0;

  data.forEach((x:any) => {
      sum += x.qtyRingFenced
  })


  this.totalRingFenced = volScrap - sum 
}

getExpireCategoryBgColor(caseType: any): string {
  switch (caseType) {
    case "Medium Shelf Life":
      return "#B9DEF1"; 
    case "Long Shelf Life":
      return "#B3E1B8";
    case "Short Shelf Life":
      return "#FEE1A1"; 
    case "Expired":
      return "#E1E1E2";
    default:
      return "";
  }
}

}
