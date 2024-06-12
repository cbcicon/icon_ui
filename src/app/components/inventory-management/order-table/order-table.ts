import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { QauntityBreakdownPopupComponent } from '../popup/qauntity-breakdown-popup/qauntity-breakdown-popup';
import { Sidebar } from 'primeng/sidebar';
import { ItemSearchPopupComponent } from '../popup/itemsearchpopup/item-search-popup';
import * as FileSaver from 'file-saver';
import { DataShortenerService } from '../data-shortener/data-shortener.service';
import { TableDataService } from '../../../common/table-data/table-data.service';
import { UtilService } from '../../../common/util';



@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.html',
  styleUrl: './order-table.scss'
})

export class OrderTableComponent implements OnInit {


inventoryTableData:any;

totalRecords!: number;

loading: boolean = false;

selectAll: boolean = false;


rowsPerPageOptions:any

selectedInterval: string | null = null;

tableHeaderItem :any;

ref: DynamicDialogRef | undefined;


chatRightSideBar = false

inventoryChartData: any;
options: any;



@ViewChild('sidebarRef') sidebarRef!: Sidebar;



viewAdditionColumn = false
showDetailContent  = false
controlRow = 10;
changeExpandButton = false
commentText: string = ''
chatData :any

selectedItems!: any[];
dateFilterData :any


constructor( public tableDataService:TableDataService  ,  private invetoryServices: DataService  , public dialogService: DialogService , public util:UtilService ,  public dataShortenerService:DataShortenerService) {}


ngOnInit() {
    this.loading = true;

this.componentInitilization()

this.tableHeaderItem = this.invetoryServices.additionalHeaderInventoryTable
  
this.inventoryChartInitialise()


}


// configure component inititialization
componentInitilization(){

  this.tableDataService.getInventoryTableData().subscribe(
      (res: any) => {
        this.inventoryTableData = res;
        this.dateFilterData = res;
        this.totalRecords = res.length;
        this.rowsPerPageOptions = this.divideIntoMultiplesOfTen(this.totalRecords)
        this.loading = false;
      },
      (error) => {
          console.error('Error fetching inventory table data:', error);
          this.loading = false;
      }
  );

 ;
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


onSelectionChange(event:any) {

  const selectedIds = event.value.map((item: any) => item.id);

  this.tableHeaderItem.forEach((item:any) => {
    item.active = false;
  });

  selectedIds.forEach((itemId: string) => {
    this.tableHeaderItem.forEach((item: any) => {
      if (item.id === itemId) {
        item.active = true;
      }
    });
  });
}


onSelectAllChange(event: any) {
   const checked = event.checked;
  this.selectedItems = checked ? this.tableHeaderItem : [];
  this.selectAll = checked;

    if (checked) {
      this.tableHeaderItem.forEach((item:any) => {
        item.active = true;
      });
    } else {
      this.tableHeaderItem.forEach((item:any) => {
        item.active = false;
      });
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



selectedSize:string = 'p-datatable-gridlines p-datatable-striped'


postComment(){

  const existingComments = JSON.parse(localStorage.getItem('comments') || '[]');

  existingComments.push({  commentText :this.commentText ,read: false });

  localStorage.setItem('comments', JSON.stringify(existingComments));

}



handleAdditionanlColumn(){
  this.viewAdditionColumn =  !this.viewAdditionColumn
}



exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.inventoryTableData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Inventory Data');
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
    this.inventoryTableData =  this.dateFilterData
    return;
  }

  this.selectedInterval = datetype; 
  
  this.inventoryTableData = this.dateFilterData

  switch (datetype) {
    case 'weekly':
      this.inventoryTableData = this.dataShortenerService.filterWeekly(this.inventoryTableData);
      break;
    case 'monthly':
      this.inventoryTableData = this.dataShortenerService.filterMonthly(this.inventoryTableData);
      break;
    case 'quarterly':
      this.inventoryTableData = this.dataShortenerService.filterQuarterly(this.inventoryTableData);
      break;
    case 'half-yearly':
      this.inventoryTableData = this.dataShortenerService.filterHalfYearly(this.inventoryTableData);
      break;
    case 'yearly':
      this.inventoryTableData = this.dataShortenerService.filterYearly(this.inventoryTableData);
      break;
    default:
      break;
  }
}

chartShow = false

handleChartShow(){
  this.chartShow = !this.chartShow
}


inventoryChartInitialise(){
  const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.inventoryChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: '#41B34E', // Green
                    data: [5, 6, 6, 5, 7, 6, 6],
                    borderColor: 'white',
                    borderWidth: 3,
                    barThickness: 20, // Width of the bar
                    borderRadius: {
                       topLeft: 10,
                        topRight: 10,
                        bottomLeft: 0,
                        bottomRight: 0
                    }
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: '#757575', // Gray
                    data: [6, 7, 5, 6, 7, 5, 6],
                    borderColor: 'white',
                    borderWidth: 3,
                    barThickness: 20, // Width of the bar
                    borderRadius: {
                       topLeft: 10,
                        topRight: 10,
                        bottomLeft: 0,
                        bottomRight: 0
                    }
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#1790D0', // Blue
                    data: [6, 5, 7, 6, 6, 7, 5],
                    borderColor: 'white',
                    borderWidth: 3,
                    barThickness: 20, // Width of the bar
                    borderRadius: {
                       topLeft: 10,
                        topRight: 10,
                        bottomLeft: 0,
                        bottomRight: 0
                    }
                },
                {
                    type: 'bar',
                    label: 'Dataset 4',
                    backgroundColor: '#FCB415', // Orange
                    data: [5, 7, 6, 6, 5, 6, 7],
                    borderColor: 'white',
                    borderWidth: 3,
                    barThickness: 20, // Width of the bar
                    borderRadius: {
                       topLeft: 10,
                        topRight: 10,
                        bottomLeft: 0,
                        bottomRight: 0
                    }
                }
            ]
        };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    max: 20, // Adjusted max value
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };  

}



}