import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-dm-kit-config',
  templateUrl: './dm-kit-config.component.html',
  styleUrls:[ './dm-kit-config.component.scss']
})
export class DmKitConfigComponent {


  selectedValue:any;

  loading:boolean = false;


  shelfLifeForm: FormGroup;

  constructor(private fb: FormBuilder , public tableDataService:TableDataService  , public util:UtilService) {
    this.shelfLifeForm = this.fb.group({
      expiryDuration: [0, Validators.required],
      shortShelfLife: [0, Validators.required],
      mediumShelfLife: [0, Validators.required],
      longShelfLife: [0, Validators.required],
      
    });
  }

  selfLifeTableData = []


  ngOnInit(){
      
  this.tableDataService.getAllShelflifeDetailTbl().subscribe((res:any) => {
    this.selfLifeTableData = res 
  })

   
}


  onSubmit(): void {
    if (this.shelfLifeForm.valid) {


      let requestBody = this.shelfLifeForm.value ;

      requestBody['userName'] = "SBarla"
      
      this.tableDataService.saveShelfLifeDetails( requestBody).subscribe((res:any) => {
  
        this.tableDataService.getAllShelflifeDetailTbl().subscribe((res:any) => {
          this.selfLifeTableData = res 
        })   
      })  
    }


  }


}
