import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-stock-and-scrap',
  templateUrl: './stock-and-scrap.component.html',
  styleUrls:['./stock-and-scrap.component.scss']
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
