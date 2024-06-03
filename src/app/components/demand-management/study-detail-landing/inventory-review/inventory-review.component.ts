import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-inventory-review',
  templateUrl: './inventory-review.component.html',
  styleUrls: ['./inventory-review.component.scss']
})
export class InventoryReviewComponent implements OnInit {

  inventoryReview: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.inventoryReview = this.dataService.getInventoryReviewData();
    this.inventoryReview.forEach((item: any) => {
      item.editing = false;
    });
  }

  onEditRow(item: any): void {
    item.editing = true;
  }

  onSaveRow(item: any): void {
    item.editing = false;
    
    this.dataService.updateInventoryItem(item).subscribe();
  }

  onCancelRow(item: any, index: number): void {
    item.editing = false;
    
    this.inventoryReview[index] = this.dataService.getInventoryReviewData()[index]; 
  }
}
