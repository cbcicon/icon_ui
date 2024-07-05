import { Component } from '@angular/core';

@Component({
  selector: 'app-inv-config-purchase-order',
  templateUrl: './inv-config-purchase-order.html',
  styleUrls:[ './inv-config-purchase-order.scss']
})
export class InvConfigPurchaseOrderComponent {

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
