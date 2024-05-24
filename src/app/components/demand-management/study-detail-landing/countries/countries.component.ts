import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

  constructor(private dataService: DataService ) {}
  
  countries: any;

  ngOnInit(): void {
    this.countries = this.dataService.getCountries();
  }
}