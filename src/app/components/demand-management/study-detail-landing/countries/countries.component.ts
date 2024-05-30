import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.countries = this.dataService.getCountries();
    this.countries.forEach((country: any) => {
      country.editing = false;
    });
  }

  onEditRow(country: any): void {
    country.editing = true;
  }

  onSaveRow(country: any): void {
    country.editing = false;
    
    this.dataService.updateCountry(country).subscribe();
  }

  onCancelRow(country: any, index: number): void {
    country.editing = false;
    
    this.countries[index] = this.dataService.getCountries()[index]; 
  }
}
