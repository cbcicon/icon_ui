import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {

  constructor(private dataService: DataService ) {}
  
  sites: any;

  ngOnInit(): void {
    this.sites = this.dataService.getSites();
  }
}
