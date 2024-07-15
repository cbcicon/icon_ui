import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Sidebar } from 'primeng/sidebar';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-ring-fence',
  templateUrl: './ring-fence.html',
  styleUrls:['./ring-fence.scss']
})
export class RingFenceComponent implements OnInit  {

  chartActive = false;

  constructor( public tableDataServices:TableDataService , public util:UtilService ) {}

   ringFenceData :any
   loading: boolean = true

   lockActive = false

   ingredient= false
   chatRightSideBar = false

   data:any;
   options:any;

   @ViewChild('sidebarRef') sidebarRef!: Sidebar;
   

  ngOnInit(){
 
    this.tableDataServices.getRingFenceData().subscribe((res:any) => {
      this.ringFenceData  =  this.transformData(res)
  
    })

    setTimeout(() => {
      this.loading =  false
    },1000)

    const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
          {
              data: [540, 325, 702],
              backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }
      ]
  };

  this.options = { 

      plugins: {
          legend: {
            position: 'bottom' ,
            align: 'start' ,
              labels: {
                  usePointStyle: true,
                  color: textColor
                },
             direction: 'vertical'
          } 
      }
  };

  }


  transformData(data:any) {
    return data.map((entry:any) => {
        const transformedEntry = { ...entry.mainarray, ...entry.subarrays };
        return transformedEntry;
    });
}

commentText:string = ''


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

sponsorList:any
protocolList:any
lotNumberList:any
countryList:any
qtyUnlockList:any


handleLockUnlockForm(data:any){
  this.sponsorList = []
  this.protocolList = []
  this.lotNumberList  = []
  this.countryList = []
  this.qtyUnlockList = []

  this.countryList.push({id:0 , value:data.location})

  for(let i =0 ; i<data.sponsor.length; i++ ){
    this.sponsorList.push({id:i, value:data.sponsor[i]})
  }
  for(let i =0 ; i<data.protocolId.length; i++ ){
    this.protocolList.push({id:i, value:data.protocolId[i]})
  }

  for(let i =0 ; i<data.lotNumber.length; i++ ){
    this.lotNumberList.push({id:i, value:data.lotNumber[i]})
  }
  for(let i =0 ; i<data.qtyUnlock.length; i++ ){
    this.qtyUnlockList.push({id:i, value:data.qtyUnlock[i]})
  }

 
}

handleChartShow(){
  this.chartActive = false
}

handleChatRightSidebar(){
  this.chatRightSideBar = !this.chatRightSideBar
}


postComment(){
  localStorage.setItem('comment', this.commentText);
}

closeCallback(e:any): void {
  this.sidebarRef.close(e);
}

hideShowChart(){
  this.chartActive = !this.chartActive
}

calculateCustomerTotal(location: string , field:any) {
  let total = 0;
console.log("testRak : " , this.ringFenceData);

  if (this.ringFenceData) {
      for (let customer of this.ringFenceData) {
          if (customer.location === location) {
              total = total + customer[field];
          }
      }
  }

  return total;
}

}
