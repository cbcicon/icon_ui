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
}
