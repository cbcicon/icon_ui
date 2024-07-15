import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
    selector: 'app-livecountries',
    templateUrl: './livecountries.component.html',
    styleUrls: ['./livecountries.component.scss']
  })
export class LiveCountriesComponent {


  constructor(private dataService: DataService ) {}

  countries :any
  loading: boolean = true

 ngOnInit(){
  this.countries = this.dataService.getLiveCountries();
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

