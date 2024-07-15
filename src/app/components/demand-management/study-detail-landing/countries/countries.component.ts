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

  // getTextColor(value: number): string {
  //   if (value === 0) {
  //     return 'rgba(34, 34, 34, 1)'; // Dark gray for 0 value
  //   } else {
  //     return 'rgba(241, 92, 97, 1)'; // Red for non-zero values
  //   }
  // }

  getTextColor(value: any): string {
    const numericValue = Number(value);
    return numericValue === 0 ? 'rgba(34, 34, 34, 1)' : 'rgba(241, 92, 97, 1)';
  }   

  DisplayIcon(country: any, type: string): boolean {
    const index = this.countries.indexOf(country);
    
    if (type === 'warning') {
      // Display warning icon for all rows except the middle value
      return index !== Math.floor(this.countries.length / 2);
    } else if (type === 'success') {
      // Display success icon only for the middle value
      return index === Math.floor(this.countries.length / 2);
    }
    
    return false; // Default to false if type is neither 'warning' nor 'success'
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
