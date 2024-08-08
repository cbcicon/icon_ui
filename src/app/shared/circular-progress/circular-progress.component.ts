import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls:['./circular-progress.component.scss']
})
export class CircularProgressComponent {

  
  constructor() { }

  cssprop = 'circular-chart nill';
  strokes = '0 ,100';
  
  @Input() value:any = 40;

  ngOnInit(): void {
    
    if (Number(this.value) > 0 && Number(this.value) <= 50) {
      this.cssprop = 'circular-chart green';
      this.strokes =  this.value +' ,'+100;
    }
    else if(Number(this.value) > 50 && Number(this.value) < 80) {
      this.cssprop = 'circular-chart yellow';
      this.strokes =  this.value +' ,'+100;
    }
    else if(Number(this.value) > 80 && Number(this.value) < 100) {
      this.cssprop = 'circular-chart red';
      this.strokes =  this.value +' ,'+100;
    }  
  }

}
