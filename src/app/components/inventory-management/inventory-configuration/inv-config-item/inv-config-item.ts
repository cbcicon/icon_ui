import { Component } from '@angular/core';
import { TableDataService } from '../../../../common/table-data/table-data.service';

@Component({
  selector: 'app-inv-config-item',
  templateUrl: './inv-config-item.html',
  styleUrls:['./inv-config-item.scss']
})
export class InvConfigItemComponent {


  itemDataConfig :any = []

  rowsPerPageOptions:any;

  controlRow = 10;

  
selectedValue:any;

  loading: boolean = false;

  totalRecords!: number;
  changeExpandButton = false

  selectedSize:string = 'p-datatable-gridlines p-datatable-striped' ;

  constructor( public tableDataService :TableDataService){}

  ngOnInit(){

    this.tableDataService.getAllItemConfigurationTbl().subscribe( (res:any) => {
      this.itemDataConfig = res
      this.totalRecords = res.length
      this.rowsPerPageOptions = this.divideIntoMultiplesOfTen(this.totalRecords)
    })

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



  monthList = [{ value: '1', name: '1 month' },
  { value: '2', name: '2 month' },
  { value: '3', name: '3 month' },
  { value: '4', name: '4 month' },
  { value: '5', name: '5 month' },
  ]


  onSponsorChange(event: any) {

    let searchParam = event.value.value;

    console.log("test : " ,searchParam)

  }
  
}