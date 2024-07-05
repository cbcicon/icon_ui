import { Component } from '@angular/core';
import FileSaver from 'file-saver';
import { DataService } from '../data-services/data.service';
import { TableDataService } from '../../../common/table-data/table-data.service';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.html',
  styleUrls:[ './scrap.scss']
})
export class ScrapComponent {

  scrapData:any;
  loading  = false;
  controlRow = 20;
  changeExpandButton = false

  selectedSize:string = 'p-datatable-gridlines p-datatable-striped'

  rowsPerPageOptions:any

  
  selectedValue:any;

  totalRecords:number = 0 ;

  showDetailTables:boolean =false;
  
  showScrapDetailMore:boolean = false;

  scrapItemDetailData:any 

  scrapDetailMoreData = {sponsor:'' ,vendor:'',poNo:'',lotNumber:''}

  constructor(  public tableDataService : TableDataService){}

  ngOnInit(){
 
     this.tableDataService.getAllScrapMainTbl().subscribe((res:any) => {
      this.scrapData = res
     this.rowsPerPageOptions = this.divideIntoMultiplesOfTen(res.length)
      
     })

     this.tableDataService.getAllScrapDetailTbl().subscribe((res:any) => {
      this.scrapItemDetailData = res
      
     })
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
  

  divideIntoMultiplesOfTen(number:any) {
    const multiplesOfTen = [];
    let currentMultiple = 10;

    while (currentMultiple <= number) {
        multiplesOfTen.push(currentMultiple);
        currentMultiple += 10;
    }

    return multiplesOfTen;
}




calculateTotalSum (val:any , field:any){
  let total  =0 ;

  if (this.scrapData) {
    for (let x of this.scrapData) {
        if (x.productionLocation === val) {
            total = total + x[field];
        }
    }
}

return total;

}


handleScrapDetailMore(data:any){
  
  this.scrapDetailMoreData = data

  this.showScrapDetailMore = !this.showScrapDetailMore
}

handleScarpDetailShow(){
  this.showDetailTables = !this.showDetailTables
}



}
