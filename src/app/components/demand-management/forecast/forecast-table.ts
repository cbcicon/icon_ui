import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Sidebar } from 'primeng/sidebar';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-order-table',
  templateUrl: './forecast-table.html'
})

export class ForecastTable implements OnInit {
  moment: any;
  forecasts: any;
  colunms: any;
  duration: any;
  selectedDuration: any;
  totalRecords!: number;
  loading: boolean = false;
  rightSideBar: boolean = false
  selectAll: boolean = false;
  selectedforecasts!: any
  rowsPerPageOptions: any
  showInfoCard: boolean = false

  tableHeaderItem = [
    { id: '1', columnName: 'Actions', sortableColumn: 'item', active: false },
    { id: '2', columnName: 'Item Description', sortableColumn: 'Component', active: false },
    { id: '3', columnName: 'Demand', sortableColumn: 'ProductNo', active: false },
    { id: '4', columnName: 'On Stock', sortableColumn: 'Manufacturer', active: false },
    { id: '5', columnName: 'Availablity', sortableColumn: 'ItemType', active: false },
    { id: '6', columnName: 'Open Po', sortableColumn: 'Jan24', active: false },
    { id: '7', columnName: 'Due Date', sortableColumn: 'Feb24', active: false },
    { id: '8', columnName: 'Item Type', sortableColumn: 'Mar24', active: false },
    { id: '9', columnName: 'Qty to Order', sortableColumn: 'Apr24', active: false },
    { id: '10', columnName: 'Study Type', sortableColumn: 'May24', active: false },
    { id: '11', columnName: 'Kit Production Location', sortableColumn: 'Jun24', active: false },
    { id: '12', columnName: 'Order Type', sortableColumn: 'Jul24', active: false },
     ];

  showItemDetailPage: boolean = false
  data: any;
  options: any;
  chatRightSideBar = false
  tableViewOption: boolean = false;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  itemData: any = [];
  tableView: any;
  setRows: number = 10;
  stockFilterOption: any = [];
  availbiltyFilterOption: any;
  openPoFilterOption: any;
  itemTypeFilterOption: any;
  viewAdditionColumn = false;
  showDetailContent = false;
  additionalColList = [];
  controlRow = 10;
  changeExpandButton = false

  constructor(private forecastService: DataService, public dialogService: DialogService) {
  }


  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.forecasts = this.forecastService.getForecastData();
      this.loading = false
    }, 1000);
    this.rowsPerPageOptions = this.divideIntoMultiplesOfTen(this.totalRecords)
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
      scales: {
        xAxes: [{
          barPercentage: 0.4
        }]
      },
      plugins: {
        legend: {
          position: 'right',
          align: 'center',
          labels: {

            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

  }

  divideIntoMultiplesOfTen(number: any) {
    const multiplesOfTen = [];
    let currentMultiple = 10;

    while (currentMultiple <= number) {
      multiplesOfTen.push(currentMultiple);
      currentMultiple += 10;
    }

    return multiplesOfTen;
  }

  loadforecasts(event: TableLazyLoadEvent) {
    this.loading = true;
  }

  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedforecasts = value;
  }

  onSelectAllChange(event: any) {
    const checked = event.checked;

    if (checked) {
      this.selectedforecasts = this.forecastService.getForecastData();
      this.selectAll = true;
    } else {
      this.selectedforecasts = [];
      this.selectAll = false;
    }
  }


  backToMainPage() {
    this.showItemDetailPage = !this.showItemDetailPage;
  }


  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }


  showContent: boolean = true;

  toggleContent() {
    this.showContent = !this.showContent;
  }

  handleInfoCard() {
    this.showInfoCard = !this.showInfoCard
  }


  handleChatRightSidebar() {
    this.chatRightSideBar = !this.chatRightSideBar
  }


  handleTableView() {
    this.tableViewOption = !this.tableViewOption
  }

  selectedSize: string = 'p-datatable-gridlines p-datatable-striped'

  handleTableSize(size: any) {
    if (size === 'Normal Grids') {
      this.setRows = 10
      this.selectedSize = 'p-datatable-gridlines p-datatable-striped'
    } else if (size === 'Small Grids') {
      this.selectedSize = ' p-datatable-gridlines p-datatable-striped p-datatable-sm'
      this.setRows = 15
    } else if (size === 'Large Grids') {
      this.setRows = 5
      this.selectedSize = 'p-datatable-gridlines p-datatable-striped p-datatable-lg'
    }
  }

  handleAdditionanlColumn() {
    this.viewAdditionColumn = !this.viewAdditionColumn
  }
  selectedItems!: any[];

  addedColumnConfig(event: any) {
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

  handleRowControl(){
    this.controlRow = this.controlRow == 10 ? 28:10
    this.changeExpandButton = this.controlRow == 10 ? false:true;
  }
  

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.forecasts);
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

  hanldeBelowContent() {
    this.showDetailContent = !this.showDetailContent
  }


}
