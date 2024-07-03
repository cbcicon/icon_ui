import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
    selector: 'app-liveworkorders',
    templateUrl: './liveworkorders.component.html',
    styleUrls: ['./liveworkorders.component.scss']
  })
export class LiveWorkOrdersComponent {


  constructor(private dataService: DataService ) {}

  workorders :any
  loading: boolean = true

 ngOnInit(){
  this.workorders = this.dataService.getLiveWorkOrders();
   setTimeout(() => {
     this.loading =  false
   },1000)
 }
}
