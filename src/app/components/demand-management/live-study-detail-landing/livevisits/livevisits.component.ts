import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
    selector: 'app-livevisits',
    templateUrl: './livevisits.component.html',
    styleUrls: ['./livevisits.component.scss']
  })
export class LiveVisitsComponent {


  constructor(private dataService: DataService ) {}

  visits :any
  loading: boolean = true

 ngOnInit(){
  this.visits = this.dataService.getLiveVisits();
   setTimeout(() => {
     this.loading =  false
   },1000)
 }
}
