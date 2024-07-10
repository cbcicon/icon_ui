import { Component } from '@angular/core';

@Component({
  selector: 'app-inv-config-self-life',
  templateUrl: './inv-config-self-life.html',
  styleUrls:['./inv-config-self-life.scss']
})
export class InvConfigSelfLifeComponent {

  selectedValue:any;

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
