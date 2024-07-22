import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-inv-config-purchase-order',
  templateUrl: './inv-config-purchase-order.html',
  styleUrls:[ './inv-config-purchase-order.scss']
})
export class InvConfigPurchaseOrderComponent {

  configPurchaseOrderForm!: FormGroup;

  configPoData:any
  loading =false

  constructor(private fb: FormBuilder ,public tableDataService:TableDataService  , public util:UtilService) { }

  ngOnInit(): void {
    this.configPurchaseOrderForm = this.fb.group({
      poboDuration: ['', Validators.required],
      podlDuration: ['', Validators.required],
    });

    
    this.tableDataService.getAllPOConfigDetailTbl().subscribe((res:any) => {
        this.configPoData = res 
      })   
  }
 

  onSubmit(): void {
    if (this.configPurchaseOrderForm.valid) {

      let requestBody =  this.configPurchaseOrderForm.value

      requestBody["userName"] = "SBarla"

      this.tableDataService.savePOConfigDetails( requestBody).subscribe((res:any) => {
  
        this.tableDataService.getAllPOConfigDetailTbl().subscribe((res:any) => {
          this.configPoData = res 
        })   
      })  

 
    }
  }



}