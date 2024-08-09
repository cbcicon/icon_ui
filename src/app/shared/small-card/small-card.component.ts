import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls:['./small-card.component.scss']
})
export class SmallCardComponent {
 
  @Input() label = 'HAPPY'
  @Input() firstValue = '20%'
  @Input() secondValue = '100'

  @Output() toggleTopSideBar: EventEmitter<void> = new EventEmitter();


   handleTopsideBar(){
    this.toggleTopSideBar.emit()
   }
  

}
