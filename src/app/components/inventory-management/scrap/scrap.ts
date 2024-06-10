import { Component } from '@angular/core';
import FileSaver from 'file-saver';
import { DataService } from '../data-services/data.service';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.html',
  styleUrls:[ './scrap.scss']
})
export class ScrapComponent {

  scrapData:any;
  loading  = false;
  controlRow = 10;
  changeExpandButton = false

  selectedSize:string = 'p-datatable-gridlines p-datatable-striped'


  constructor( public dataServices : DataService){}

  ngOnInit(){
    this.scrapData = this.dataServices.scrapData
  }


  
  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.scrapData);
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
  

}
