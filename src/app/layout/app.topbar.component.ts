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

     
    sidebarVisible:boolean =  false;

    model:any

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
      { name: 'Work Order', code: 'workOrder' },
      { name: 'Protocol', code: 'protocol' },
      { name: 'Sponsor', code: 'sponsor' },
      { name: 'Kit', code: 'kit' },
      { name: 'Item', code: 'item' },
      { name: 'Vendor', code: 'vendor' },
      { name: 'Country', code: 'country' },
     ];

     this.model = [
      {
          label: 'Dashboard',
          icon: 'bi bi-columns-gap mx-2',
          items:[
            { label: 'Dashboard', routerLink: ['/'] }
          ]
          
          
      },
      {
          label: 'Demand Management',
          icon:"bi bi-bar-chart mx-2",
          collapsed: true,
          items: [
              { label: 'Master Demand Plan', routerLink: ['/demand-management/master-demand-plan'] },
              { label: 'Forecast', routerLink: ['/demand-management/forecast'] },
              { label: 'Study Planning', routerLink: ['/demand-management/study-planning'] },
              { label: 'Configurations', routerLink: ['/demand-management/dm-configuration'] }
          ]
      },
      {
          label: 'Resource Planning',
          icon: 'bi bi-people-fill mx-2',
          collapsed:true,
          items: [
              { label: 'Person hours', routerLink: ['/'] },
              { label: 'Storage', icon: 'truck-icon', routerLink: ['/'] },
          ]
      },
      {
          label: 'Revenue Management',
          icon: 'bi bi-currency-dollar mx-2',
          collapsed:true,
          items: [
              { label: 'Revenue', routerLink: ['/revenue-management/revenue'] },
              { label: 'Configurations', icon: 'truck-icon', routerLink: ['/revenue-management/revenue-configuration'] },
          ]
      },
      {
          label: 'Inventory Management',
          icon: 'bi bi-clipboard-data mx-2',
          collapsed:true,
          items: [
              { label: 'Inventory', routerLink: ['/inventory-management/order-list'] },
              { label: 'Purchase Orders', routerLink: ['/inventory-management/inventory-purchase-order'] },
              { label: 'Saftey Stocks', routerLink: ['/inventory-management/safety-stock'] },
              { label: 'Scrap', routerLink: ['/inventory-management/scrap'] },
              { label: 'Configurations', routerLink: ['/inventory-management/inventory-configuration'] }
          ]
      },
      {
          label: 'MPS',
          icon: 'bi bi-clipboard-data mx-2',
          collapsed:true,
          items: [{ label: 'Schedule', icon: 'setting-icon', routerLink: ['/'] }]
      },
      {
          label: 'What-if Scenarios',
          icon:'bi bi-question-circle mx-2',
          collapsed:true,
          items: [
              { label: 'Kit Reports', icon: 'setting-icon', routerLink: ['/'] }
          ]
      },
      { label: 'Analytics', icon: 'bi bi-graph-up-arrow mx-2', routerLink: ['/'] },

      { label: 'Report', icon:  'bi bi-file-spreadsheet mx-2', routerLink: ['/'] },

 
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
      this.router.navigate(['/search-page/search-page-table'], { queryParams: { query: this.selectedSearchValue.code } });
    }
  }

  
  handleSideBarContent(){
    this.sidebarVisible = !this.sidebarVisible
  }

  toggleMenu(index: number) {
    this.model[index].collapsed = !this.model[index].collapsed;
}

}