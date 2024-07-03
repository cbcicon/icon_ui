import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
    selector: 'app-livekits',
    templateUrl: './livekits.component.html',
    styleUrls: ['./livekits.component.scss']
  })
export class LiveKitsComponent {


  constructor(private dataService: DataService ) {}

  kits :any;
  loading: boolean = true

 ngOnInit(){
  this.kits = this.dataService.getLiveKits();
   setTimeout(() => {
     this.loading =  false
   },1000)
 }
}
