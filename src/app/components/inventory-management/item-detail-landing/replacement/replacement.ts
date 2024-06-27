import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'app-replacement',
  templateUrl: './replacement.html',
  styleUrls:['./replacement.scss']
})
export class ReplacementComponent {


  constructor( public tableDataService:TableDataService) {}

  replacemnetData :any
  replacementActionData  :any
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


sponsors:any
countries:any
protocolNumbers:any

selectedSponsors:any
selectedCountries:any
selectedProtocolNumbers:any

 ngOnInit(){
  


   this.tableDataService.getReplacementTableData().subscribe((res:any) => {

    this.replacemnetData = res
   this.sponsors = [...new Set(res.map((item:any) => item.sponsor))].map(sponsor => ({ value: sponsor, name: sponsor }));
   this.loading =  false
   })

   this.tableDataService.getReplacementActionData().subscribe((res:any) => {
    this.replacementActionData = res
   })


   setTimeout(() => {
     this.loading =  false
   },1000)

 }


 searchfilteredData :any

 onSponsorChange(event: any) {

  let searchParam = event.value.value;
  
  this.searchfilteredData = this.replacemnetData.filter((item: any) => item.sponsor === searchParam);


  this.countries = [...new Set(this.searchfilteredData.map((item: any) => item.country))]
    .map(country => ({ value: country, name: country }));

  this.protocolNumbers = [...new Set(this.searchfilteredData.map((item: any) => item.protocolNumber))]
    .map(protocol => ({ value: protocol, name: protocol }));

    this.showReplacementData = true;
}


actionSponsorList:any
actionProtocolIdList:any
actionLocationList:any
actionWorkOrderList:any
actionLotNumberList:any

 handleReplacementFound(){
  
  this.showReplacementData = !this.showReplacementData
 }


 handleShowReplacement(){
  this.showReversal = !this.showReversal

 }

 handleReplacementActionData(sponsorKey:any){
  let filteredData = this.replacementActionData.filter((item: any) => item.sponsorName === sponsorKey.name);
  

  this.actionSponsorList = [{ value: sponsorKey, name: sponsorKey }]

  this.actionProtocolIdList = [...new Set(filteredData.map((item: any) => item.protocolId))]
    .map(protocolId => ({ value: protocolId, name: protocolId }));

  this.actionLocationList = [...new Set(filteredData.map((item: any) => item.location))]
    .map(location => ({ value: location, name: location }));

  this.actionWorkOrderList = [...new Set(filteredData.map((item: any) => item.workOrder))]
    .map(workOrder => ({ value: workOrder, name: workOrder }));

  this.actionLotNumberList = [...new Set(filteredData.map((item: any) => item.lotNumber))]
    .map(lotNumber => ({ value: lotNumber, name: lotNumber }));
 }



}