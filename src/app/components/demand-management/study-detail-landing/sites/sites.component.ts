import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sites = this.dataService.getSites();
    this.sites.forEach((site: any) => {
      site.editing = false;
    });
  }

  onEditRow(site: any): void {
    site.editing = true;
  }

  onSaveRow(site: any): void {
    site.editing = false;
    this.dataService.updateSite(site).subscribe();
  }

  onCancelRow(site: any, index: number): void {
    site.editing = false;
    
    this.sites[index] = this.dataService.getSites()[index];
  }

  getProgressBarStyle(index: number): { background: string, width: string } {
    if (index < 1 || index >= this.sites.length - 1) {
      // Top and bottom row
      return {
        background: 'linear-gradient(to right, rgba(65, 179, 78, 1) 50%, rgba(225, 225, 226, 1) 50%)',
        width: '150.56px'
      };
    } else if (index >= 1 && index < this.sites.length - 1) {
      // Middle rows
      return {
        background: 'rgba(225, 225, 226, 1)',
        width: '150.56px'
      };
    }
    return {
      background: '',
      width: '150.56px'
    };
  }

  shouldDisplayPercentage(index: number): boolean {
    return index < 1 || index >= this.sites.length - 1;
  }

  DisplayIcon(site: any, type: string): boolean {
    const index = this.sites.indexOf(site);
    
    if (type === 'warning') {
      // Display warning icon for middle 3 rows
      return index >= Math.floor(this.sites.length / 2) - 1 && index <= Math.floor(this.sites.length / 2) + 1;
    } else if (type === 'success') {
      // Display success icon for first and last row
      return index === 0 || index === this.sites.length - 1;
    }
    
    return false; // Default to false if type is neither 'warning' nor 'success'
  }
  
  getStatusIcon(status: string, index: number): string {
    if (index === 0 || index === this.sites.length - 1) {
      // Top and bottom rows
      if (status === 'Planned') {
        return 'bi bi-check-circle-fill success-icon';
      }
    } else if (index === 1 || index === this.sites.length - 2) {
      // 2nd and last but one row
      if (status === 'Un-Planned') {
        return 'bi bi-exclamation-circle-fill warning-icon';
      }
    } else if (index === Math.floor(this.sites.length / 2)) {
      // Middle row
      if (status === 'Date Exceeded') {
        return 'bi bi-x-circle-fill';
      }
    }
  
    return '';
  }  

  getIconColor(status: string): string {
    switch (status) {
      case 'Planned':
        return 'rgba(65, 179, 78, 1)'; // Green color for Planned status
      case 'Un-Planned':
        return 'rgba(252, 180, 21, 1)'; // Orange color for Un-Planned status
      case 'Date Exceeded':
        return 'rgba(241, 92, 97, 1)'; // Red color for Date Exceeded status
      default:
        return ''; // Default to empty string or any other fallback color
    }
  }
  
}
