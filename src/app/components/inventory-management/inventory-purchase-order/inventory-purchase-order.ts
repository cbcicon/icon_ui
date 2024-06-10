import { Component } from '@angular/core';
import FileSaver from 'file-saver';
import { DataService } from '../data-services/data.service';

@Component({
  selector: 'app-inventory-purchase-order',
  templateUrl: './inventory-purchase-order.html',
  styleUrls:['./inventory-purchase-order.scss']
})
export class InventoryPurchaseOrderComponent {

  inventoryPurchaseOrderData:any;
  loading:boolean = false;
  controlRow = 10;

  selectedSize:string = 'p-datatable-gridlines p-datatable-striped'

  rowsPerPageOptions:any;

  changeExpandButton = false;

  showDetailContent = false;

  ipoEntityDetail:any;

  constructor(public dataServices:DataService){}

  ngOnInit(){
    this.inventoryPurchaseOrderData = this.dataServices.inventoryPurchaseOrderData
    this.ipoEntityDetail = this.dataServices.ipoEntityDetail
  }


  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.inventoryPurchaseOrderData);
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

  handleRowControl(){
    this.controlRow = this.controlRow == 10 ? 28:10
    this.changeExpandButton = this.controlRow == 10 ? false:true;
  }


  hanldeBelowContent(){
    this.showDetailContent = !this.showDetailContent
  }


}
