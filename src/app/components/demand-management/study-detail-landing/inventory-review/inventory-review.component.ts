import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-inventory-review',
  templateUrl: './inventory-review.component.html',
  styleUrls: ['./inventory-review.component.css']
})
export class InventoryReviewComponent {

  constructor(private dataService: DataService ) {}
  
  inventoryReview: any;
  

  ngOnInit(): void {
    this.inventoryReview = this.dataService.getInventoryReviewData();
  }
}
