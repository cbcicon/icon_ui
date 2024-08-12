import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Sidebar } from 'primeng/sidebar';
import { Router } from '@angular/router';



@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls:['./app.topbar.component.scss']
})
export class AppTopBarComponent {

    items!: MenuItem[];

    profileMenu: any;

    showProfile:boolean = false

    searchOption: any[] | undefined;

    selectedSearchValue:any;

    alertRightSideBar :boolean = false;
    historyRightSideBar :boolean = false;
    showToDoList =  false
    unreadCommentLength = 0;
    
    allComments = []

    showSearchBar:boolean = false;
    
    
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

 
   

    constructor(public layoutService: LayoutService , private router: Router) { }

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

    this.searchOption = [
      { name: 'Work Order', code: 'AU' },
      { name: 'Protocol', code: 'BR' },
      { name: 'Sponsor', code: 'CN' },
      { name: 'Kit', code: 'AU' },
      { name: 'Protocol', code: 'BR' },
      { name: 'Item #', code: 'CN' },
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


   handleSearchBar(){
    this.showSearchBar = !this.showSearchBar;
   }


   onSearchOptionSelected() {
    if (this.selectedSearchValue) {
      this.router.navigate(['/search-page/search-page-table'], { queryParams: { query: this.selectedSearchValue.name } });
    }
  }

   
}