import { Component } from '@angular/core';

@Component({
  selector: 'app-inv-config-safety-stock',
  templateUrl: './inv-config-safety-stock.html',
  styleUrls:['./inv-config-safety-stock.scss']
})
export class InvConfigSafetyStockComponent {
  

  selectedValue:any;

  loading:boolean = false;
  totalRecords:number = 0 ;

  invConfigSafetyStockData:any =[
    {
      actions: "",
      location: "Buxton",
      configType: "Location",
      minStock: 100,
      maxStock: 500,
    
      createdDate: "01 Jan 2024",
      lastModifiedDate: "15 Jan 2024",
    },
    {
      actions: "",
      location: "Farmingdale",
      configType: "Location",
      minStock: 3.0,
      maxStock: 600,
    
      createdDate: "01 Jan 2024",
      lastModifiedDate: "18 Jan 2024",
    },
    {
      actions: "",
      location: "Therepak CZ",
      configType: "Location",
      minStock: 50,
      maxStock: 300,
    
      createdDate: "01 Jan 2024",
      lastModifiedDate: "23 Jan 2024",
    },
    {
      actions: "",
      location: "Midland",
      configType: "Location",
      minStock: 100,
      maxStock: 400,
    
      createdDate: "01 Jan 2024",
      lastModifiedDate: "7 Feb 2024",
    },
    {
      actions: "",
      location: "Tennant EU",
      configType: "Location",
      minStock: 350,
      maxStock: 400,
    
      createdDate: "01 Jan 2024",
      lastModifiedDate: "10 Feb 2024",
    },
    {
      actions: "",
      location: "Shannon EU",
      configType: "Location",
      minStock: 300,
      maxStock: 250,
     
      createdDate: "01 Jan 2024",
      lastModifiedDate: "19 Feb 2024",
    },
    {
      actions: "",
      location: "Global",
      configType: "Location",
      minStock: 250,
      maxStock: 850,
    
      createdDate: "01 Jan 2024",
      lastModifiedDate: "22 Feb 2024",
    }
  ]
  
  


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

