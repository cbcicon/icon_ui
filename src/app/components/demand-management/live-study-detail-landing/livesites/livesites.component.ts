import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
    selector: 'app-livesites',
    templateUrl: './livesites.component.html',
    styleUrls: ['./livesites.component.scss']
  })
export class LiveSitesComponent {


  constructor(private dataService: DataService ) {}

  sites :any
  loading: boolean = true

 ngOnInit(){
  this.sites = this.dataService.getLiveSites();
   setTimeout(() => {
     this.loading =  false
   },1000)
 }
}