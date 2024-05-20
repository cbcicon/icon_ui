import { Component, Input, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-msg-right-sidebar',
  templateUrl: './msg-right-sidebar.html',
  styleUrls:['./msg-right-sidebar.scss']
})
export class MsgRightSidebarComponent {
  
  
  @Input() allComments:any

  @Input() unreadCommentLength:any

  alertRightSideBar = true;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;


  closeCallback(e:any): void {
    this.sidebarRef.close(e);
 }

}
