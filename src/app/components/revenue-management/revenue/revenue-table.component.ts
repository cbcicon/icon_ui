import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Sidebar } from 'primeng/sidebar';
import * as FileSaver from 'file-saver';
import { UtilService} from '../../../common/util';

@Component({
  selector: 'app-revenue-table',
  templateUrl: './revenue-table.component.html',
  styleUrls: ['./revenue-table.component.scss']
})
export class RevenueTableComponent implements OnInit {
  revenues: any; 
  revenueData: any;
  editing: boolean = false;
  editingRow: any = null;
  selectedRevenue!: any;
  loading: boolean = false;
  selectAll: boolean = false;
  showRevenueDetailPage: boolean = false;
  tableViewOption: boolean = false;
  viewAdditionColumn = false;
  pageSize: any;
  setRows: any;
  additionalColList = [];
  showRevenueDetailContent = false;
  chatRightSideBar = false;
  changeExpandButton = false;
  iconState: boolean[] = []; // Array to track the icon state for each row
  expandedRowIndex: number | null = null;
  tableView: any;
  showProductionLocationTable: boolean = false;

  rowsPerPageOptions: any[] = Array.from({ length: 9 }, (_, i) => (i + 1) * 10);

  showItemDetailPage: boolean = false

  ref: DynamicDialogRef | undefined;

  data: any;

  options: any;
  
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  itemData: any = [];
  @Input() allComments:any;
  @Input() unreadCommentLength:any;
  alertRightSideBar = true;
  changcontrolRoweExpandButton = false;
  showInfoCard: boolean = false;
  
  commentText: string = '';
  
  constructor(private util: UtilService,private revenueService: DataService, public dialogService: DialogService) { }

  ngOnInit() {
    this.revenueService.getRevenueData().subscribe(data => {
      this.revenueData = data;
      this.iconState = new Array(this.revenues.length).fill(false); // Initializing the icon state array
      this.setRows = this.util.getPageSize(); // Initializing with the default page size
    });
  }

// loadStudiesLazy(event: TableLazyLoadEvent) {
//   this.loading = true;

//   // Simulate a delay to show loading indicator
//   setTimeout(() => {
//     const start = event.first ?? 0;
//     const pageSize = event.rows ?? 10;

//     // Calculate the end index based on the start index and page size
//     const end = start + pageSize;

//     // Fetch data for the current page
//     this.studies = this.revenues.slice(start, end);
//     this.loading = false;
//   }, 1000); // Simulating a delay of 1 second
// }

onSelectAllChange(event: any) {
  this.selectedItems = event.checked ? this.additionalColList : [];
  this.selectAll = event.checked;
}


selectedItems!: any[];
  onSelectionChange(event: any) {
  }

  handleRowControl() {
    this.setRows = this.setRows == this.util.getPageSize() ? this.revenueData.length : this.util.getPageSize();
    this.changeExpandButton = this.setRows == this.util.getPageSize() ? false : true;
  }


  closeCallback(e: any): void {
    this.sidebarRef.close(e);
    // this.chatRightSideBar = false;
  }

  selectedSize: string = 'p-datatable-gridlines p-datatable-striped'

  handleAdditionanlColumn() {
    this.viewAdditionColumn = !this.viewAdditionColumn
  }

showContent: boolean = true;
  toggleContent() {
    this.showContent = !this.showContent;
  }

  handleInfoCard() {
    this.showInfoCard = !this.showInfoCard
  }

exportExcel() {
  import('xlsx').then((xlsx) => {
    const worksheet = xlsx.utils.json_to_sheet(this.revenueData);
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

handleTableView() {
  this.tableViewOption = !this.tableViewOption
}
  
// hanldeBelowContent() {
//   this.showDetailContent = !this.showDetailContent
// }

// handleRevenue(index: number) {
//     this.iconState[index] = !this.iconState[index]; // Toggling the icon state for the clicked row
//   }

handleRevenue(index: number) {
    this.expandedRowIndex = this.expandedRowIndex === index ? null : index;
  }

handleBelowContent() {
    this.showRevenueDetailContent = !this.showRevenueDetailContent
}

handleChatRightSidebar(revenue:any) {
  this.chatRightSideBar = !this.chatRightSideBar
  this.revenueData = revenue;
}

 // Method to show the ProductionLocation component
 toggleProductionLocationTable(productionLocation: string, event: MouseEvent): void {
    event.preventDefault(); // Prevent default link behavior
    this.showProductionLocationTable = true;
    // You may want to pass or use the `productionLocation` value as needed
  }
postComment(){


  const existingComments = JSON.parse(localStorage.getItem('comments') || '[]');

  existingComments.push({  commentText :this.commentText ,read: false });

  localStorage.setItem('comments', JSON.stringify(existingComments));

}
}