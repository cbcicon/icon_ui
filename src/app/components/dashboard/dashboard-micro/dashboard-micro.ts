import { Component } from '@angular/core';
 

@Component({
  selector: 'app-dashboard-micro',
  templateUrl: './dashboard-micro.html',
  styleUrls: ['./dashboard-micro.scss']
})
export class DashboardMicroComponent {

  data: any;

  options: any;

  items: any;

  activeItem:any;

  optionsValue = []

  showTopSidebar:boolean = false

  loading:boolean = false

  revenueResourceData = [
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
    {location:'Farmingdale' ,capacity:'500' ,allocated:'2000' ,revenue:'$49900',gain:'21%'},
  ]



  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400')
          ]
        }
      ]
    };

    this.options = {
      cutout: '40%',
      plugins: {
        legend: {
          position: 'right', 
          labels: {
            color: textColor
          }
        },
        layout: {
         
        }

      }
    };

    this.items = [
      { label: 'Items', icon: 'pi pi-fw pi-home' },
      { label: 'Bulk', icon: 'pi pi-fw pi-calendar' },
  ];

  this.activeItem = this.items[0];

  }


  handleTopsideBarToggle(){
    this.showTopSidebar = !this.showTopSidebar
  }


  impactingItemData = [
    {
      itemNumber: "454238",
      itemDescription: "GREINER 2ML GREY / WHITE SODIUM FLUORIDE VACUETTE TU",
      sponsorProtocolNumber: "CRC - 403",
      kitName: "4242",
      replacement: "Yes",
      criticality: "Yes",
      workOrderNumber: "WO4583435",
      protocol: "P-9283"
    },
    {
      itemNumber: "454238",
      itemDescription: "GREINER 2ML GREY / WHITE SODIUM FLUORIDE VACUETTE TU",
      sponsorProtocolNumber: "1517 - CL - 0101",
      kitName: "435",
      replacement: "Yes",
      criticality: "Yes",
      workOrderNumber: "WO3453434",
      protocol: "P-3492"
    },
    {
      itemNumber: "16001-176",
      itemDescription: "VWR IML DISPOSABLE TRANSFER PIPET , GRADUATED",
      sponsorProtocolNumber: "18331A",
      kitName: "7688",
      replacement: "No",
      criticality: "No",
      workOrderNumber: "WO6578678",
      protocol: "P-6710"
    },
    {
      itemNumber: "16001-176",
      itemDescription: "VWR IML DISPOSABLE TRANSFER PIPET , GRADUATED",
      sponsorProtocolNumber: "19-2360",
      kitName: "9087",
      replacement: "Yes",
      criticality: "Yes",
      workOrderNumber: "WO3243534",
      protocol: "P-2145"
    },
    {
      itemNumber: "16001-176",
      itemDescription: "VWR IML DISPOSABLE TRANSFER PIPET , GRADUATED",
      sponsorProtocolNumber: "2006-0342 - EU",
      kitName: "1231",
      replacement: "Yes",
      criticality: "No",
      workOrderNumber: "WO6576877",
      protocol: "P-9182"
    },
    {
      itemNumber: "96-2721",
      itemDescription: "METZ SCISS CVD 5-1 / 2 \" STER CS50",
      sponsorProtocolNumber: "2138 - CL - 0101",
      kitName: "234",
      replacement: "No",
      criticality: "No",
      workOrderNumber: "WO7899897",
      protocol: "P-3927"
    },
    {
      itemNumber: "96-2721",
      itemDescription: "METZ SCISS CVD 5-1 / 2 \" STER CS50",
      sponsorProtocolNumber: "2215 - CL - 0203",
      kitName: "7666",
      replacement: "No",
      criticality: "No",
      workOrderNumber: "WO2321333",
      protocol: "P-7403"
    },
    {
      itemNumber: "96-2721",
      itemDescription: "METZ SCISS CVD 5-1 / 2 \" STER CS50",
      sponsorProtocolNumber: "2802 - CL - 06 ...",
      kitName: "3452",
      replacement: "Yes",
      criticality: null,
      workOrderNumber: "WO2024527",
      protocol: "P-8392"
    },
    {
      itemNumber: "89492-646",
      itemDescription: "SIMPORT 2.0ML PP SELF - STANDING CRYOVIAL",
      sponsorProtocolNumber: "3082 - CL - 0101",
      kitName: "2546",
      replacement: "Yes",
      criticality: null,
      workOrderNumber: "WO4849203",
      protocol: "P-5618"
    },
    {
      itemNumber: "89492-646",
      itemDescription: "SIMPORT 2.0ML PP SELF - STANDING CRYOVIAL",
      sponsorProtocolNumber: "NN9931-4553",
      kitName: "8656",
      replacement: "Yes",
      criticality: null,
      workOrderNumber: "WO8394930",
      protocol: "P-4176"
    },
    {
      itemNumber: "362782",
      itemDescription: "BD 8ML BLUE / BLACK CPT W / SODIUM CITRATE VACUTAINER",
      sponsorProtocolNumber: "PTG - 300-11",
      kitName: "7643",
      replacement: "No",
      criticality: null,
      workOrderNumber: "WO8302399",
      protocol: "P-3854"
    }
  ]
  
  

}
