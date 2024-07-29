import { Component } from '@angular/core';


@Component({
  selector: 'app-dm-configuration',
  templateUrl: './dm-configuration.component.html',
  styleUrls:['./dm-configuration.component.scss']
})
export class DmConfigurationComponent {

  
  constructor() {
    this.activeItem = this.items[0];
  }

  items = [ {name:'Kit Configs',icon:'bi bi-box-seam'}];
  activeItem: any;

  selectItem(item: any) {
    this.activeItem = item;
  }
}
