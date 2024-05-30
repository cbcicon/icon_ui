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
    // Resetting to original values.
    this.sites[index] = this.dataService.getSites()[index];
  }
}
