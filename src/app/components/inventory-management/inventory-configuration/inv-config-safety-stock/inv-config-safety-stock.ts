import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-inv-config-safety-stock',
  templateUrl: './inv-config-safety-stock.html',
  styleUrls:['./inv-config-safety-stock.scss']
})
export class InvConfigSafetyStockComponent {
  

  selectedValue:any;

  loading:boolean = false;
  totalRecords:number = 0 ;

  stockForm!: FormGroup;
  invConfigSafetyStockData:any

  constructor(private fb: FormBuilder ,  public tableDataService:TableDataService  , public util:UtilService) { }


  ngOnInit(): void {


    this.tableDataService.getAllSafetyStockConfigDetailTbl().subscribe((res:any) => {
      this.invConfigSafetyStockData = res 
    })
  

    this.stockForm = this.fb.group({
      location: ['', Validators.required],
      excessStockDuration: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      minStock: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      maxStock: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }



  onSubmit(): void {
    if (this.stockForm.valid) {

      let bodyRequest = this.stockForm.value ;
      
      bodyRequest["userName"] = "SBarla"

      bodyRequest["configType"] =  bodyRequest["location"] ? "location"  : "global" ;

      this.tableDataService.saveSafetyStockConfigDetails( bodyRequest ).subscribe((res:any) => {

        this.tableDataService.getAllSafetyStockConfigDetailTbl().subscribe((res:any) => {
          this.invConfigSafetyStockData = res 
        })
            
      })

    }
  }


}
