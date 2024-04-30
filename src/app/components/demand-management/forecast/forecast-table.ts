import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { Sidebar } from 'primeng/sidebar';
import * as FileSaver from 'file-saver';
import { Utils } from '../../../common/utils';

@Component({
  selector: 'app-order-table',
  templateUrl: './forecast-table.html'
})

export class ForecastTable implements OnInit {
  forecasts: any;
  loading: boolean = false;
  rightSideBar: boolean = false
  selectAll: boolean = false;
  selectedforecasts!: any
  rowsPerPageOptions: any
  showInfoCard: boolean = false;
  showItemDetailPage: boolean = false
  data: any;
  options: any;
  chatRightSideBar = false
  tableViewOption: boolean = false;
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  itemData: any = [];
  tableView: any;
  setRows: number = Utils.pageSize;
  stockFilterOption: any = [];
  availbiltyFilterOption: any;
  openPoFilterOption: any;
  itemTypeFilterOption: any;
  viewAdditionColumn = false;
  showDetailContent = false;
  changcontrolRoweExpandButton = false;
  additionalColList = [];
  monthlyData: any;
  chartData: any;
  changeExpandButton = false;

  constructor(private forecastService: DataService) {
  }

  ngOnInit() {
    const startDate = '2024-01-01'; 
    const chartStartDate = '2023-06-23'; 
    const endDate = '2024-10-01';
    this.loading = true;
    setTimeout(() => {
      this.forecasts = this.forecastService.getForecastData();
      this.loading = false
      this.monthlyData = Utils.generateMonthlyData(startDate, endDate, 9);
      this.chartData = Utils.generateMonthlyData(chartStartDate, '', 12);
      console.log(this.forecastService.getForecastChartData());
      //Add to additional columns after 6 months;
      this.additionalColList = this.monthlyData.filter((f: any) => f['value'] > 6);
    }, 1000);


  }
  loadforecasts(event: TableLazyLoadEvent) {
    this.loading = true;
  }

  onSelectAllChange(event: any) {
    this.selectedItems = event.checked ? this.additionalColList : [];
    this.selectAll = event.checked;
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

  handleAdditionanlColumn() {
    this.viewAdditionColumn = !this.viewAdditionColumn
  }

  selectedItems!: any[];
  onSelectionChange(event: any) {
  }

  handleRowControl() {
    this.setRows = this.setRows == Utils.pageSize ? this.forecasts.length : Utils.pageSize
    this.changeExpandButton = this.setRows == Utils.pageSize ? false : true;
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
