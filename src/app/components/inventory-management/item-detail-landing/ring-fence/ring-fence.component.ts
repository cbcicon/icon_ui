import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Sidebar } from 'primeng/sidebar';

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
   chatRightSideBar = false

   @ViewChild('sidebarRef') sidebarRef!: Sidebar;
   

  ngOnInit(){
    this.ringFenceData = this.dataService.ring_fence
    setTimeout(() => {
      this.loading =  false
    },1000)
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


handleChatRightSidebar(){
  this.chatRightSideBar = !this.chatRightSideBar
}


postComment(){
  localStorage.setItem('comment', this.commentText);
}

closeCallback(e:any): void {
  this.sidebarRef.close(e);
}

}
