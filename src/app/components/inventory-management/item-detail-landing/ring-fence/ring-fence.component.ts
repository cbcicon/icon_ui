import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-ring-fence',
  templateUrl: './ring-fence.component.html',
  styleUrls:['./ring-fence.component.scss']
})
export class RingFenceComponent implements OnInit  {

  constructor(private dataService: DataService ) {}

   ringFenceData :any
   loading: boolean = true

   lockActive = false

   ingredient= false
   

  ngOnInit(){
    this.ringFenceData = this.dataService.ring_fence
    setTimeout(() => {
      this.loading =  false
    },1000)
  }


states: any[] = [
    {name: 'Arizona', code: 'Arizona'},
    {name: 'California', value: 'California'},
    {name: 'Florida', code: 'Florida'},
    {name: 'Ohio', code: 'Ohio'},
    {name: 'Washington', code: 'Washington'}
];

dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
];


handleLockUnlockShow(){

  if(!this.lockActive){
    this.lockActive = true
  }else{
    this.lockActive = false
  }

}

}
