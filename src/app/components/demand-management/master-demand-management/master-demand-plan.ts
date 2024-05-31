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
  advanceLocationDetail = [
    {
        Location: "Farmingdale",
        Sponsor: "Pfizer",
        Protocol: "PD- 001",
        Demand_Type: "Forecast/ Live",
        Demand_Kits: "300",
        Cohort: "Standard",
        Visit: "v3",
        Kit_Name: "Kit v3",
        Inventory_Rate: "30%",
        Fulfillment_Status: "10%",
        Level_1: "200",
        Level_2: "",
        Level_3: "",
        Level_4: "",
        Level_5: "",
        Level_6: "4000"
    },
    {
        Location: "Farmingdale",
        Sponsor: "Pfizer",
        Protocol: "PD- 001",
        Demand_Type: "Current demand",
        Demand_Kits: "800",
        Cohort: "Standard",
        Visit: "Unscheduled",
        Kit_Name: "Unscheduled",
        Inventory_Rate: "20%",
        Fulfillment_Status: "40%",
        Level_1: "",
        Level_2: "",
        Level_3: "",
        Level_4: "",
        Level_5: "",
        Level_6: "100"
    },
    {
        Location: "Farmingdale",
        Sponsor: "Pfizer",
        Protocol: "PD- 002",
        Demand_Type: "New",
        Demand_Kits: "500",
        Cohort: "Standard",
        Visit: "v5",
        Kit_Name: "Kit v5",
        Inventory_Rate: "15%",
        Fulfillment_Status: "35%",
        Level_1: "",
        Level_2: "100",
        Level_3: "",
        Level_4: "",
        Level_5: "",
        Level_6: "300"
    },
    {
        Location: "Buford",
        Sponsor: "Molecular",
        Protocol: "PD- 003",
        Demand_Type: "Forecast/ Live",
        Demand_Kits: "200",
        Cohort: "Standard",
        Visit: "v3",
        Kit_Name: "Kit v3",
        Inventory_Rate: "50%",
        Fulfillment_Status: "45%",
        Level_1: "",
        Level_2: "200",
        Level_3: "",
        Level_4: "200",
        Level_5: "",
        Level_6: ""
    },
    {
        Location: "Midland",
        Sponsor: "Novaitis",
        Protocol: "PD- 002",
        Demand_Type: "Forecast/ Live",
        Demand_Kits: "200",
        Cohort: "Standard",
        Visit: "vl",
        Kit_Name: "Kit vl",
        Inventory_Rate: "25%",
        Fulfillment_Status: "70%",
        Level_1: "",
        Level_2: "",
        Level_3: "",
        Level_4: "",
        Level_5: "",
        Level_6: "300"
    },
    {
        Location: "Therapak",
        Sponsor: "Assembly",
        Protocol: "PD- 002",
        Demand_Type: "New",
        Demand_Kits: "500",
        Cohort: "Standard",
        Visit: "vl",
        Kit_Name: "Kit vl",
        Inventory_Rate: "35%",
        Fulfillment_Status: "68%",
        Level_1: "300",
        Level_2: "400",
        Level_3: "",
        Level_4: "",
        Level_5: "",
        Level_6: "100"
    }
]

  stateOptions: any[] = [{ label: 'Number', value: 'number' },{ label: 'Percentage', value: 'percentage' }];
  value: string = 'off'

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
    this.rowsPerPageOptions =  this.divideIntoMultiplesOfTen(100)
    this.mdpData = this.dataService.getMdpData()
    this.productionLocationDetailsData = this.dataService.getProductionLocationDetailsData()
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


}
