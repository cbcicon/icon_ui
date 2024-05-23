import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-stock-and-scrap',
  templateUrl: './stock-and-scrap.html',
  styleUrls:['./stock-and-scrap.scss']
})
export class StockAndScrapComponent {


  constructor(private dataService: DataService ) {}

  stockAndScrap :any
  loading: boolean = true

 ngOnInit(){
  this.stockAndScrap = this.dataService.stock_and_scrap;
   setTimeout(() => {
     this.loading =  false
   },1000)
 }


}
