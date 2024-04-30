import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-tag',
  templateUrl: './block-tag.component.html',
  styleUrls: ['./block-tag.component.scss']
})
export class BlockTagComponent {
  

@Input() blockTagStyle: any;

@Input() blockData = {label:'' , qtyNum:''}

}
