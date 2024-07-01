import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-configuration',
  templateUrl: './inventory-configuration.html',
  styleUrls:['./inventory-configuration.scss']
})
export class InventoryConfigurationComponent {

  constructor() {
    this.activeItem = this.items[0];
  }

  items = [ {name:'Item Configs',icon:'bi bi-book'}, {name:'Safety Stock',icon:'bi bi-stopwatch'}, {name:'Shelf Life' ,icon:'bi bi-receipt'} , {name:'Purchase Orders' , icon:'bi bi-card-checklist'}];
  activeItem: any;

  selectItem(item: any) {
    this.activeItem = item;
  }

}
