import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-tag',
  templateUrl: './block-tag.html',
  styleUrls: ['./block-tag.scss']
})
export class BlockTagComponent {
  

@Input() blockTagStyle: any;

@Input() blockData = {label:'' , qtyNum:''}

}
