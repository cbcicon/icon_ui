import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-ring-fence',
  templateUrl: './ring-fence.html',
  styleUrls:['./ring-fence.scss']
})
export class RingFenceComponent implements OnInit  {

  chartActive = false;

  constructor(private dataService: DataService ) {}

   ringFenceData :any
   loading: boolean = true

   lockActive = false

   ingredient= false
   chatRightSideBar = false

   data:any;
   options:any;

   @ViewChild('sidebarRef') sidebarRef!: Sidebar;
   

  ngOnInit(){
    this.ringFenceData = this.dataService.ring_fence
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

}
