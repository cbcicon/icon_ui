import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { UtilService } from '../../../common/util';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { DataService } from '../data-services/data.service';

@Component({
  selector: 'app-master-demand-plan',
  templateUrl: './master-demand-plan.html',
  styleUrls:['./master-demand-plan.scss']
})
export class MasterDemandPlanComponent {

  productionLocationDetailsData  :any
  cities: any;

  selectedCity: any;

  advanceLocationDetail :any
  stateOptions: any[] = [{ label: 'Number', value: 'number' },{ label: 'Percentage', value: 'percentage' }];
  value: string = 'off'
  showFilterMenu = false

  enteredDate :string =''
  showAdditionalDetail = false

  mdpData :any
  loading =  false;
  selectedInterval: string | null = null;
  rowsPerPageOptions:any
  controlRow = 10;

  changeExpandButton = false

  selectedSize:string = 'p-datatable-gridlines p-datatable-striped'

  showLocationDetail = false ;

  constructor(public utilService:UtilService , public dataService  :DataService){}

  ngOnInit(){

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];

    this.rowsPerPageOptions =  this.divideIntoMultiplesOfTen(100)
    this.mdpData = this.dataService.getMdpData()
    this.productionLocationDetailsData = this.dataService.getProductionLocationDetailsData()
    this.advanceLocationDetail = this.dataService.getAdvanceLocationDetail()
  }


  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.mdpData);
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


  divideIntoMultiplesOfTen(number:any) {
    const multiplesOfTen = [];
    let currentMultiple = 10;

    while (currentMultiple <= number) {
        multiplesOfTen.push(currentMultiple);
        currentMultiple += 10;
    }

    return multiplesOfTen;
}



handleDateShortener(datetype: string): void {

  if (this.selectedInterval === datetype) {
    this.selectedInterval = '';
    //this.mdpData = this.invetoryServices.getData(); 
    return;
  }

  this.selectedInterval = datetype; 

 // this.mdpData = this.invetoryServices.getData();

  switch (datetype) {
    case 'weekly':
      this.mdpData = this.utilService.filterWeekly(this.mdpData);
      break;
    case 'monthly':
      this.mdpData = this.utilService.filterMonthly(this.mdpData);
      break;
    case 'quarterly':
      this.mdpData = this.utilService.filterQuarterly(this.mdpData);
      break;
    case 'half-yearly':
      this.mdpData = this.utilService.filterHalfYearly(this.mdpData);
      break;
    case 'yearly':
      this.mdpData = this.utilService.filterYearly(this.mdpData);
      break;
    default:
      break;
  }
}


handleRowControl(){
  this.controlRow = this.controlRow == 10 ? 28:10
  this.changeExpandButton = this.controlRow == 10 ? false:true;
}


handleAdditionanlColumn(){
 
}


openLocationDetail(){
this.showLocationDetail = !this.showLocationDetail;
this.showAdditionalDetail = false
}

openAdvanceLocationDetail(){

  this.showAdditionalDetail = !this.showAdditionalDetail
  this.showLocationDetail  = false
}


handleFilterMenu(){
  this.showFilterMenu = !this.showFilterMenu
}




}