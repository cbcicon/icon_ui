import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { TableDataService } from '../../../../common/table-data/table-data.service';

@Component({
  selector: 'app-stock-and-scrap',
  templateUrl: './stock-and-scrap.html',
  styleUrls:['./stock-and-scrap.scss']
})
export class StockAndScrapComponent {


  constructor(private dataService: DataService , public tableDataService :TableDataService ) {}

  stockAndScrap :any
  loading: boolean = true
  

 ngOnInit(){

  this.tableDataService.getStockScrapTableData().subscribe((res:any) => {
    this.stockAndScrap = res;
    this.loading =  false
  })

   setTimeout(() => {
     this.loading =  false
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


}
