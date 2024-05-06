import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { UtilService} from '../../../common/util';
@Component({
  selector: 'app-order-table',
  templateUrl: 'purchase-order-table.html'
})

export class PurchaseOrderTable implements OnInit {


  constructor(private util: UtilService, private forecastService: DataService,) {
  }

  
  ngOnInit() {
    


  }
  

}
