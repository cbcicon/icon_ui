import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Sidebar } from 'primeng/sidebar';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    alertRightSideBar :boolean = false;

    unreadCommentLength = 0;

    allComments = []

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    

    constructor(public layoutService: LayoutService) { }

    ngOnInit(){ }

    get getComments(): boolean {
  
        let chatData = JSON.parse(localStorage.getItem('comments') || '[]');

        this.allComments = chatData;

        let unreadCount = 0;

      chatData.forEach((comment:any) => {
        if (!comment.read) {
          unreadCount++;
        }
      });

      this.unreadCommentLength = unreadCount

        if (chatData.length > 0) {
          return chatData.some((comment:any) => !comment.read);
        } else {
          return false; 
        }
      }

      closeCallback(e:any): void {
        this.sidebarRef.close(e);
     }
    

      handleReadComments(){
        const existingComments =JSON.parse(localStorage.getItem('comments') || '[]');
        const updatedComments = existingComments.map((comment:any )=> {
            comment.read = true;
          return comment;
        });
        localStorage.setItem('comments', JSON.stringify(updatedComments));
      }



 hideShowAlertSidebar(){
       this.alertRightSideBar = ! this.alertRightSideBar
     }

}
