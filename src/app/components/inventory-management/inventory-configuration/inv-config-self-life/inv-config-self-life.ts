import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { UtilService } from '../../../../common/util';

@Component({
  selector: 'app-inv-config-self-life',
  templateUrl: './inv-config-self-life.html',
  styleUrls:['./inv-config-self-life.scss']
})
export class InvConfigSelfLifeComponent {

  selectedValue:any;

  loading:boolean = false;

  monthList = [{ value: '1', name: '1 month' },
  { value: '2', name: '2 month' },
  { value: '3', name: '3 month' },
  { value: '4', name: '4 month' },
  { value: '5', name: '5 month' },
  ]


  shelfLifeForm: FormGroup;

  constructor(private fb: FormBuilder , public tableDataService:TableDataService  , public util:UtilService) {
    this.shelfLifeForm = this.fb.group({
      expiryDuration: [0, Validators.required],
      shortShelfLife: [0, Validators.required],
      mediumShelfLife: [0, Validators.required],
      longShelfLife: [0, Validators.required],
      userName: ['', Validators.required]
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
      
      this.tableDataService.saveShelfLifeDetails( this.shelfLifeForm.value).subscribe((res:any) => {
  

        this.tableDataService.getAllShelflifeDetailTbl().subscribe((res:any) => {
          this.selfLifeTableData = res 
        })
            
      })
       
    }
  }







}
