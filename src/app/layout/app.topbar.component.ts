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

    profileMenu: any;

    showProfile:boolean = false


    alertRightSideBar :boolean = false;
    historyRightSideBar :boolean = false;
    showToDoList =  false
    unreadCommentLength = 0;
    
    allComments = []

    
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    

    constructor(public layoutService: LayoutService) { }

    ngOnInit(){ 
      this.profileMenu = [
     
      
        {
            items: [
                {
                    label: ' Profile Settings',
                    icon: 'bi bi-gear', 
                },
                {
                    label: 'Help Center',
                    icon: 'bi bi-info-circle',
                },
                {
                    label: 'Dark Mode',
                    icon: 'bi bi-moon',
                }
            ]
        }
    ];
    }

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

// making read msg to true 
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

     closeCallback(e:any): void {
      this.sidebarRef.close(e);
   } 

   hideShowHistorySidebar(){
    this.historyRightSideBar = !this.historyRightSideBar
   }

   hideShowToDoList(){
    this.showToDoList = !this.showToDoList
   }

   handleProfile(){
     this.showProfile = !this.showProfile
   }


   
}
