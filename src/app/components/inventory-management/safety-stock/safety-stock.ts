import { Component } from '@angular/core';
import { DataService } from '../data-services/data.service';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-safety-stock',
  templateUrl: './safety-stock.html',
  styleUrls:['./safety-stock.scss']
})
export class SafetyStockComponent {

  safetyStockData :any

  loading = false;
  rowsPerPageOptions:any
  totalRecords:any
  controlRow = 30;
  changeExpandButton = false
  viewAdditionColumn = false

  selectedItems!: any[];
  selectAll: boolean = false;

  selectedSize:string = 'p-datatable-gridlines p-datatable-striped'


  
tableHeaderItem = [
  { id: '1', columnName: 'Lot Number', sortableColumn: 'item', active: false },

]

additionalColList = [
  {
    "field": "Lot Number",
    "id": 1
  },
]

  constructor(public dataServices:DataService){}

  ngOnInit(){
    this.safetyStockData = this.dataServices.safety_stock_data
    this.totalRecords =   this.safetyStockData.length

    this.rowsPerPageOptions =  this.divideIntoMultiplesOfTen(this.totalRecords)
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


exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.safetyStockData);
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


handleAdditionanlColumn(){
  this.viewAdditionColumn =  !this.viewAdditionColumn
}


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
}
