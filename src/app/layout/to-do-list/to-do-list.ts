import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.html',
  styleUrls:['./to-do-list.scss']
})
export class ToDoListComponent {

  
  constructor() {
    this.activeItem = this.items[0];
  }

  items = [ {name:'Move Stock',icon:'bi bi-book'}, {name:'Create PO',icon:'bi bi-stopwatch'}, {name:'Need Replacement' ,icon:'bi bi-receipt'} , {name:'Review Excess Stock' , icon:'bi bi-card-checklist'}];
  activeItem: any;

  selectItem(item: any) {
    this.activeItem = item;
  }


}
