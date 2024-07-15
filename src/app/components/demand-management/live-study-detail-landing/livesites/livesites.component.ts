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

 getProgressBarStyle(): { background: string, width: string } {
  return {
    background: 'linear-gradient(to right, rgba(65, 179, 78, 1) 50%, rgba(225, 225, 226, 1) 50%)',
    width: '150.56px' // Adjust width as needed
  };
}

shouldDisplayPercentage(): boolean {
  return true; // Display percentage for row
}
}