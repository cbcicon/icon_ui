import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { QauntityBreakdownPopupComponent } from '../popup/qauntity-breakdown-popup/qauntity-breakdown-popup.component';
import { Sidebar } from 'primeng/sidebar';
import { ItemSearchPopupComponent } from '../popup/itemsearchpopup/item-search-popup.component';


export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  activity?: number;
  representative?: Representative;
}

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}


interface InventoryStatus {
  label: string;
  value: string;
}
export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  verified?:boolean;
  date?: string;
  status?: string;
  activity?: number;
  representative?: Representative;
  balance?:number
}

interface expandedRows {
  [key: string]: boolean;
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: InventoryStatus;
  category?: string;
  image?: string;
  rating?: number;
}


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.scss'
})

export class OrderTableComponent implements OnInit {


customers:any;
colunms: any;
duration: any;
selectedDuration: any;
totalRecords!: number;

loading: boolean = false;
rightSideBar:boolean = false

representatives!: Representative[];

selectAll: boolean = false;

selectedCustomers!:any

rowsPerPageOptions:any
showInfoCard:boolean = false

tableHeaderItem = [
  { columnName: 'Item', sortableColumn: 'item' },
  { columnName: 'Item Description', sortableColumn: 'description' },
  { columnName: 'Demand', sortableColumn: 'demand' },
  { columnName: 'On Stock', sortableColumn: 'onstock' },
  { columnName: 'Availablity', sortableColumn: 'availability' },
  { columnName: 'Open Po', sortableColumn: 'open_po' },

  { columnName: 'Due Date', sortableColumn: 'due_date' },
  { columnName: 'Item Type', sortableColumn: 'item_type' },
];

showItemDetailPage:boolean = false

ref: DynamicDialogRef | undefined;

data: any;

options: any;


@ViewChild('sidebarRef') sidebarRef!: Sidebar;

itemData: any= [];

constructor(private customerService: DataService  , public dialogService: DialogService) {}


ngOnInit() {

    this.loading = true;
    this.totalRecords = 180;
    setTimeout(() => {
    this.customers = this.customerService.getData();
    this.colunms = this.customerService.getColumns()
    this.duration = this.customerService.getDuration();
    this.selectedDuration = this.customerService.getDuration()[1];
    this.loading = false
  }, 2000);

  this.rowsPerPageOptions =  this.divideIntoMultiplesOfTen(this.totalRecords)



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
            position: 'right' ,
            align: 'center' ,
              labels: {
               
                  usePointStyle: true,
                  color: textColor
              }
          } 
      }
  };

  this.itemData = [
    {
      "id": "1000",
      "code": "f230fh0g3",
      "name": "Bamboo Watch",
      "description": "Product Description",
      "image": "bamboo-watch.jpg",
      "price": 65,
      "category": "Accessories",
      "quantity": 24,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1001",
      "code": "nvklal433",
      "name": "Black Watch",
      "description": "Product Description",
      "image": "black-watch.jpg",
      "price": 72,
      "category": "Accessories",
      "quantity": 61,
      "inventoryStatus": "OUTOFSTOCK",
      "rating": 4
    },
    {
      "id": "1002",
      "code": "zz21cz3c1",
      "name": "Blue Band",
      "description": "Product Description",
      "image": "blue-band.jpg",
      "price": 79,
      "category": "Fitness",
      "quantity": 2,
      "inventoryStatus": "LOWSTOCK",
      "rating": 3
    },
    {
      "id": "1003",
      "code": "244wgerg2",
      "name": "Blue T-Shirt",
      "description": "Product Description",
      "image": "blue-t-shirt.jpg",
      "price": 29,
      "category": "Clothing",
      "quantity": 25,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1004",
      "code": "h456wer53",
      "name": "Bracelet",
      "description": "Product Description",
      "image": "bracelet.jpg",
      "price": 15,
      "category": "Accessories",
      "quantity": 73,
      "inventoryStatus": "INSTOCK",
      "rating": 4
    }
  ] 


  }

  divideIntoMultiplesOfTen(number:any) {
    const multiplesOfTen = [];
    let currentMultiple = 10;

    while (currentMultiple <= number) {
        multiplesOfTen.push(currentMultiple);
        currentMultiple += 10;
    }

    return multiplesOfTen;
}

loadCustomers(event: TableLazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
        // this.customerService.getCustomers({ lazyEvent: JSON.stringify(event) }).then((res) => {
        //     this.customers = res;
        //     this.totalRecords = 100;
        //     this.loading = false;
        // });
        // this.customers = this.customerService.getData()
        // this.totalRecords = 180;
        // this.loading = false
    }, 1000);

    
}

onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedCustomers = value;
}

onSelectAllChange(event: any) {
    const checked = event.checked;

    if (checked) {
        this.selectedCustomers =  this.customerService.getData();
        this.selectAll = true;
    } else {
        this.selectedCustomers = [];
        this.selectAll = false;
    }
}



show() {
this.ref = this.dialogService.open(QauntityBreakdownPopupComponent, {
    header: 'Quantity Breakdown',
    width: '50vw',
    height:'400',
    contentStyle: { overflow: 'auto' }
});
}

showItemSearch(){
  this.ref = this.dialogService.open(ItemSearchPopupComponent, {
    header: 'Explore Item',
    width: '50vw',
    height:'400',
    contentStyle: { overflow: 'auto' }
});
}

goToItemDetailsPage(){
  this.showItemDetailPage =  true ;
}

backToMainPage(){
  this.showItemDetailPage =  false ;
}


closeCallback(e:any): void {
    this.sidebarRef.close(e);
}


showContent: boolean = true;

toggleContent() {
  this.showContent = !this.showContent;
}

handleInfoCard(){
  this.showInfoCard = ! this.showInfoCard
}

}
