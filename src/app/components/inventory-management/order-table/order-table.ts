import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { QauntityBreakdownPopupComponent } from '../popup/qauntity-breakdown-popup/qauntity-breakdown-popup';
import { Sidebar } from 'primeng/sidebar';
import { ItemSearchPopupComponent } from '../popup/itemsearchpopup/item-search-popup';
import * as FileSaver from 'file-saver';
import { DataShortenerService } from '../data-shortener/data-shortener.service';



@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.html',
  styleUrl: './order-table.scss'
})

export class OrderTableComponent implements OnInit {


customers:any;
colunms: any;
duration: any;
selectedDuration: any;
totalRecords!: number;

loading: boolean = false;
rightSideBar:boolean = false

representatives: any = [];

selectAll: boolean = false;

selectedCustomers!:any

rowsPerPageOptions:any

selectedInterval: string | null = null;

tableHeaderItem = [
  { id: '1', columnName: 'Item', sortableColumn: 'item', active: false },
  { id: '2', columnName: 'Item Description', sortableColumn: 'description', active: false },
  { id: '3', columnName: 'Demand', sortableColumn: 'demand', active: false },
  { id: '4', columnName: 'On Stock', sortableColumn: 'onstock', active: false },
  { id: '5', columnName: 'Availablity', sortableColumn: 'availability', active: false },
  { id: '6', columnName: 'Open Po', sortableColumn: 'open_po', active: false },
  { id: '7', columnName: 'Due Date', sortableColumn: 'due_date', active: false },
  { id: '8', columnName: 'Item Type', sortableColumn: 'item_type', active: false },
  { id: '9', columnName: 'Qty to Order', sortableColumn: 'qty_to_order', active: false },
  { id: '10', columnName: 'Study Type', sortableColumn: 'study_type', active: false },
  { id: '11', columnName: 'Kit Production Location', sortableColumn: 'kit_production_location', active: false },
  { id: '12', columnName: 'Order Type', sortableColumn: 'order_type', active: false },
  { id: '13', columnName: 'Lead Time', sortableColumn: 'lead_time', active: false },
  { id: '14', columnName: 'Consumption', sortableColumn: 'consumption', active: false },
  { id: '15', columnName: 'Component Type', sortableColumn: 'component_type', active: false },
  { id: '16', columnName: 'Forecaste', sortableColumn: 'forecaste', active: false },
  { id: '17', columnName: 'Total Demand', sortableColumn: 'total_demand', active: false },
  { id: '18', columnName: 'Scrap', sortableColumn: 'scrap', active: false },
  { id: '19', columnName: 'Warehouse', sortableColumn: 'warehouse', active: false },
  { id: '20', columnName: 'Inventory Location', sortableColumn: 'inventory_location', active: false },
  { id: '21', columnName: 'Carton', sortableColumn: 'carton', active: false },
  { id: '22', columnName: 'Kit Category', sortableColumn: 'kit_category', active: false }
];



ref: DynamicDialogRef | undefined;

data: any;

options: any;
chatRightSideBar = false

tableViewOption:boolean = false;

@ViewChild('sidebarRef') sidebarRef!: Sidebar;

itemData: any= [];

setRows: number = 10;
stockFilterOption:any =[];
availbiltyFilterOption :any;
openPoFilterOption: any;
itemTypeFilterOption: any;
viewAdditionColumn = false
showDetailContent  = false
controlRow = 10;
changeExpandButton = false
commentText: string = ''
chatData :any

additionalColList = [
  {
    "field": "Qty to Order",
    "id": 1
  },
  {
    "field": "Study Type",
    "id": 2
  },
  {
    "field": "Kit Production Location",
    "id": 3
  },
  {
    "field": "Order Type",
    "id": 4
  },
  {
    "field": "Lead Time",
    "id": 5
  },
  {
    "field": "Consumption",
    "id": 6
  },
  {
    "field": "Component Type",
    "id": 7
  },
  {
    "field": "Forecaste",
    "id": 8
  },
  {
    "field": "Total Demand",
    "id": 9
  },
  {
    "field": "Scrap",
    "id": 10
  },
  {
    "field": "Warehouse",
    "id": 11
  },
  {
    "field": "Inventory Location",
    "id": 12
  },
  {
    "field": "Carton",
    "id": 13
  },
  {
    "field": "Kit Category",
    "id": 14
  }
]


constructor(private invetoryServices: DataService  , public dialogService: DialogService , public dataShortenerService:DataShortenerService) {}


ngOnInit() {
    this.loading = true;

    this.customers =  this.invetoryServices.getData()

    this.totalRecords =  this.customers.length

    setTimeout(() => {

    this.duration = this.invetoryServices.getDuration();
    this.selectedDuration = this.invetoryServices.getDuration()[1];
    this.loading = false
  }, 2000);

  this.rowsPerPageOptions =  this.divideIntoMultiplesOfTen(this.totalRecords)






this.stockFilterOption = [
  { label: 'On Stock', value: 'On Stock' },
  { label: 'Out Of Stock', value: 'Out Of Stock' },
  { label: 'Stock Deficiency', value: 'Stock Deficiency' },
];

this.availbiltyFilterOption = [
  { label: 'On Stock', value: 'On Stock' },
  { label: 'Out Of Stock', value: 'Out Of Stock' },
  { label: 'Stock Of Limit', value: 'Stock Of Limit' },
];

this.openPoFilterOption = [
  { label: 'Open Po', value: 'Open Po' },
  { label: 'No Open Po', value: 'No Open Po' },
];

this.itemTypeFilterOption = [
  { name: 'Temperature Specific',  value: 'Temperature Specific' },
  { name: 'Bulk Item',  value:  'Bulk Item' },
  { name: 'Dangerous Goods',  value: 'Dangerous Goods' },
  
];

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
}

onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedCustomers = value;
}

onSelectAllChange(event: any) {
    const checked = event.checked;

    if (checked) {
        this.selectedCustomers =  this.invetoryServices.getData();
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
    contentStyle: { overflow: 'auto' }, 
});
}



closeCallback(e:any): void {
    this.sidebarRef.close(e);
}



handleChatRightSidebar(customer:any){
  this.chatRightSideBar = !this.chatRightSideBar
  this.chatData = customer
}


handleTableView(){
  this.tableViewOption = !this.tableViewOption
}

selectedSize:string = 'p-datatable-gridlines p-datatable-striped'


postComment(){


  const existingComments = JSON.parse(localStorage.getItem('comments') || '[]');

  existingComments.push({  commentText :this.commentText ,read: false });

  localStorage.setItem('comments', JSON.stringify(existingComments));

}



handleAdditionanlColumn(){
  this.viewAdditionColumn =  !this.viewAdditionColumn
}



selectedItems!: any[];


addedColumnConfig(event:any){
  this.selectedItems.forEach(selection => {
    
    const matchingItem = this.tableHeaderItem.find(item => item.columnName === selection.field);
    if (matchingItem) {
        matchingItem.active = true;
    }
});

this.tableHeaderItem.forEach(item => {
  if (!this.selectedItems.some(selection => selection.field === item.columnName)) {
      item.active = false;
  }
});
}



exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.customers);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'products');
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

hanldeBelowContent(){
  this.showDetailContent = !this.showDetailContent
}

handleRowControl(){
  this.controlRow = this.controlRow == 10 ? 28:10
  this.changeExpandButton = this.controlRow == 10 ? false:true;
}

handleDateShortener(datetype: string): void {

  if (this.selectedInterval === datetype) {
    this.selectedInterval = '';
    this.customers = this.invetoryServices.getData(); 
    return;
  }

  this.selectedInterval = datetype; 

  this.customers = this.invetoryServices.getData();

  switch (datetype) {
    case 'weekly':
      this.customers = this.dataShortenerService.filterWeekly(this.customers);
      break;
    case 'monthly':
      this.customers = this.dataShortenerService.filterMonthly(this.customers);
      break;
    case 'quarterly':
      this.customers = this.dataShortenerService.filterQuarterly(this.customers);
      break;
    case 'half-yearly':
      this.customers = this.dataShortenerService.filterHalfYearly(this.customers);
      break;
    case 'yearly':
      this.customers = this.dataShortenerService.filterYearly(this.customers);
      break;
    default:
      break;
  }
}



}