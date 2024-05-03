import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data-services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  constructor(private dataService: DataService ) {}
  
  itemSummary: any;

  ngOnInit(): void {
    this.itemSummary = this.dataService.getItemSummary();
  }

}
