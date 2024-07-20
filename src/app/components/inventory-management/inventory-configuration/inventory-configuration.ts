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

  items = [ {name:'Item Configs',icon:'bi bi-box-seam'},  {name:'Criticality Config',icon:'bi bi-arrow-down-up'},  {name:'Safety Stock',icon:'bi bi-bar-chart'}, {name:'Shelf Life' ,icon:'bi bi-life-preserver'} , {name:'Purchase Orders' , icon:'bi bi-receipt'}];
  activeItem: any;

  selectItem(item: any) {
    this.activeItem = item;
  }

}
