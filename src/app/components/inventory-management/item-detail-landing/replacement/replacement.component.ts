import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-replacement',
  templateUrl: './replacement.component.html',
  styleUrls:['./replacement.component.scss']
})
export class ReplacementComponent {


  constructor(private dataService: DataService ) {}

  replacemnetData :any
  replacementDataFound :any
  loading: boolean = true
  showReplacementData = false
  ingredient = false
  showReversal = false

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



 ngOnInit(){
   this.replacemnetData = this.dataService.replacement
   this.replacementDataFound = this.dataService.replacement_found
   setTimeout(() => {
     this.loading =  false
   },1000)
 }


 handleReplacementFound(){
  this.showReplacementData = !this.showReplacementData
 }


 handleShowReplacement(){
  this.showReversal = !this.showReversal
 }

}
