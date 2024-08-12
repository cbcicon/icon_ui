import { Component } from '@angular/core';

@Component({
  selector: 'app-revenue-configuration',
  templateUrl: './revenue-configuration.component.html',
  styleUrls:['./revenue-configuration.component.scss']
})
export class RevenueConfigurationComponent {

  constructor() {
    this.activeItem = this.items[0];
  }

  items = [ {name:'Revenue Goal Config',icon:'bi bi-currency-dollar mx-2'}];
  activeItem: any;

  selectItem(item: any) {
    this.activeItem = item;
  }

}