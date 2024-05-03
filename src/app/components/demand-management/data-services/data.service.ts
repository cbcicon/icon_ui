import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from '../../../common/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {

    let data = [
      {
        "item": "01-213-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024",
        "item_type": ""
      },
      {
        "item": "01.1602.001-Z",
        "description": "Tube, 7.5m, Sterile, Brown Screw Cap, Serum Gel with Clotti..",
        "demand": "4,000",
        "on_stock": "Out of Stock",
        "availability": "Out of Stock",
        "open_po": "12000",
        "due_date": "15 Feb 2024"
      },
      {
        "item": "01.1604.100-ICON",
        "description": "Tube, 7.5mL, S-Monovette”, Lithium Heparin, Green Cap, Ster..",
        "demand": "5,000",
        "on_stock": "4,000",
        "availability": "Out of Stock",
        "open_po": "No Open PO",
        "due_date": "23 Mar 2024"
      },
      {
        "item": "01.1604.100-2",
        "description": "Tube, 7.5mL, S-Monovette®, Lithium Heparin, Green Cap, Ster..",
        "demand": "6,000",
        "on_stock": "7,050",
        "availability": "1,050",
        "open_po": "No Open PO",
        "due_date": "19 Apr 2024"
      },
      {
        "item": "02-689-21-Z",
        "description": "Commode Collection System, Urine Hat, Snap-on Lid",
        "demand": "2,000",
        "on_stock": "8,000",
        "availability": "6,000",
        "open_po": "No Open PO",
        "due_date": "20 Apr 2024"
      },
      {
        "item": "02-891B-Z",
        "description": "Tube, Gray, 2mL, Vacutainer®, Sodium Fluoride Hemogard",
        "demand": "1,500",
        "on_stock": "500",
        "availability": "Out of Stock",
        "open_po": "No Open PO",
        "due_date": "17 Mar 2024"
      },
      {
        "item": "02-893-5E-Z",
        "description": "Prefill, Cytolyt Solution, 50m1, 30m Fill",
        "demand": "6,000",
        "on_stock": "7,000",
        "availability": "1,000",
        "open_po": "No Open PO",
        "due_date": "05 Apr 2024"
      },
      {
        "item": "0236080-Z",
        "description": "Vial, Cryogenic, 2mL, Sterile, Polypropylene, Self-Standing Ro_",
        "demand": "16,000",
        "on_stock": "20,000",
        "availability": "4,000",
        "open_po": "No Open PO",
        "due_date": "06 May 2024"
      },
      {
        "item": "03-374-21-Z",
        "description": "Gel Pack, Phase Change Material, -1°C +30°C, 2402",
        "demand": "3,000",
        "on_stock": "5,000",
        "availability": "2,000",
        "open_po": "No Open PO",
        "due_date": "16 May 2024"
      },
      {
        "item": "03-528C-Z",
        "description": "Tube, Venus Blood Collection, S-Monovette*, Sodium Citrate.",
        "demand": "500",
        "on_stock": "100",
        "availability": "Out of Stock",
        "open_po": "15000",
        "due_date": "18 May 2024"
      },
      {
        "item": "04.1931.100-Z",
        "description": "Tube, S-Monovette®, 4.9mL, Red, EDTA, Customer Supplied",
        "demand": 450,
        "on_stock": "A 600",
        "availability": "& 150",
        "open_po": "No Open PO",
        "due_date": "19 May 2024"
      },
      {
        "item": "15-353-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "75-735-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "07-673-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "02-773-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "06-945-100-Y",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "97-453-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "684213-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "9033-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "8456-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      },
      {
        "item": "62e56-100-Z",
        "description": "Foil, Aluminum, Dispenser Cutter Box, Fisherbrand™, 12” x 200°",
        "demand": "22,000",
        "on_stock": "17,600",
        "availability": "4,400",
        "open_po": "No Open PO",
        "due_date": "15 May 2024"
      }
    ]

    data.forEach((item: any) => {
      item["id"] = this.generateUniqueId();
    });

    return data

  }
  getColumns() {
    let dropdownData = [
      {
        id: 1,
        name: "Vendor",
        val: "1"
      },
      {
        id: 2,
        name: "Order Type",
        val: "2"
      },
      {
        id: 3,
        name: "Warehouse",
        val: "3"
      }]
    return dropdownData;
  }
  getDuration() {
    let dropdownData = [
      {
        id: 2,
        name: "15 Days",
        val: "15Days"
      }, {
        id: 1,
        name: "3 Months",
        val: "3Months"
      },
      {
        id: 3,
        name: "6 Months",
        val: "6Months"
      }]
    return dropdownData;
  }

  constructor(private http: HttpClient, private Util: UtilService) { }

  generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http.get<any>('https://labgistics-api.azure-api.net/labgistics-api/api/DemandMgmt/GetMasterTable', { params: params }).toPromise();
  }
  getForecastData() {
    let forecastData = [
      {
        "Actions": "KitPending Que",
        "Component": "G-Sub-Assembly",
        "ProductNo": "G-Sub",
        "Manufacturer": "Therapak Corporation",
        "ItemType": "",
        "Jan24": "52,014",
        "Feb24": "51,503",
        "Mar24": "51,503",
        "Apr24": "52,014",
        "May24": "51,503",
        "Jun24": "51,503",
        "Jul24": "51,503",
        "Aug24": "51,503",
        "Sep24": "51,503"

      },
      {
        "Actions": "KitPendingQue",
        "Component": "1.8 mLClear,Plastic Nunc2D Barcod...",
        "ProductNo": "374502",
        "Manufacturer": "Thermo Scientific",
        "ItemType": "啡",
        "Jan24": "51,503",
        "Feb24": "9,234",
        "Mar24": "9,234",
        "Apr24": "51,503",
        "May24": "9,234",
        "Jun24": "9,234"
      },
      {
        "Actions": "KitPending Que",
        "Component": "Prelabel items forKitAssembly",
        "ProductNo": "Prelabel2",
        "Manufacturer": "Design Packing,Inc",
        "ItemType": "",
        "Jan24": "9,722",
        "Feb24": "338,540",
        "Mar24": "338,540",
        "Apr24": "9,722",
        "May24": "338,540",
        "Jun24": "338,540"
      },
      {
        "Actions": "KitPending Que",
        "Component": "KitBoxSmall9x5x2.5 (with SealingSt...",
        "ProductNo": "345632VMI",
        "Manufacturer": "Laddawn",
        "ItemType": "",
        "Jan24": "339,592",
        "Feb24": "43,483",
        "Mar24": "43,483",
        "Apr24": "339,592",
        "May24": "43,483",
        "Jun24": "43,483"
      },
      {
        "Actions": "KitPending Que",
        "Component": "Assembling Baggie8x8",
        "ProductNo": "F20808",
        "Manufacturer": "Greiner Bio-One, North America Inc.",
        "ItemType": "8",
        "Jan24": "43,479",
        "Feb24": "65,879",
        "Mar24": "65,879",
        "Apr24": "43,479",
        "May24": "65,879",
        "Jun24": "65,879"
      },
      {
        "Actions": "KitPending Que",
        "Component": "1/2\"DotlabelforKitBox(Red)",
        "ProductNo": "BC05R",
        "Manufacturer": "BectonDickinson-England",
        "ItemType": "B",
        "Jan24": "66,212",
        "Feb24": "1,717",
        "Mar24": "1,717",
        "Apr24": "66,212",
        "May24": "1,717",
        "Jun24": "1,717"
      },
      {
        "Actions": "KitPendingQue",
        "Component": "2mLRed/WhiteSerum w/ClotActiva...",
        "ProductNo": "454236",
        "Manufacturer": "Greiner Bio-One, North America Inc.",
        "ItemType": "A",
        "Jan24": "1,809",
        "Feb24": "4,145",
        "Mar24": "4,145",
        "Apr24": "1,809",
        "May24": "4,145",
        "Jun24": "4,145"
      },
      {
        "Actions": "KitPendingQue",
        "Component": "10 ml LavenderK2EDTA Plastic Becto...",
        "ProductNo": "366643",
        "Manufacturer": "Therapak Corporation",
        "ItemType": "De",
        "Jan24": "3,852",
        "Feb24": "5,874",
        "Mar24": "5,874",
        "Apr24": "3,852",
        "May24": "5,874",
        "Jun24": "5,874"
      },
      {
        "Actions": "KitPending Que",
        "Component": "1/2\"DotLabelforKitBox (LightBlue)",
        "ProductNo": "10101",
        "Manufacturer": "Thermo Scientific",
        "ItemType": "A",
        "Jan24": "6,014",
        "Feb24": "3,787",
        "Mar24": "3,787",
        "Apr24": "6,014",
        "May24": "3,787",
        "Jun24": "3,787"
      },
      {
        "Actions": "KitPending Que",
        "Component": "2.5mL Red/White Serum Gel w/Clot....",
        "ProductNo": "454243P",
        "Manufacturer": "Design Packing,Inc.",
        "ItemType": "",
        "Jan24": "3,537",
        "Feb24": "22,702",
        "Mar24": "22,702",
        "Apr24": "3,537",
        "May24": "22,702",
        "Jun24": "22,702"
      },
      {
        "Actions": "KitPending Que",
        "Component": "G-Sub-Assembly",
        "ProductNo": "G-Sub",
        "Manufacturer": "Laddawn",
        "ItemType": "",
        "Jan24": "22,826",
        "Feb24": "98,648",
        "Mar24": "98,648",
        "Apr24": "22,826",
        "May24": "98,648",
        "Jun24": "98,648"
      }
    ]
    return forecastData;
  }

  getForecastChartData() {
    const chartStartDate = '2023-06-23';
    let chartData = this.Util.generateMonthlyData(chartStartDate, '', 12);
    let data: any = [];
    chartData.forEach((c: any) => {
      let obj = { name: c['name'], value: (Math.random() * 1000) };
      data.push(obj);
    });
    return data;
  };
  getForecastChartDataAPI() {
    return this.http.get<any>('https://labgistics-api.azure-api.net/labgistics-api/api/DemandMgmt/GetHelloWorld').toPromise();
  
  };

  getCountries() {
    return [
      {
        "Actions": "",
        "Country": "USA",
        "Sites": "5",
        "#KitComponentSupplied": "10",
        "#KitComponentPending": "80",
        "DateKitatFirstSite": "15Mar2024",
        "Status": "50%"
      },
      {
        "Actions": "",
        "Country": "Singapore",
        "Sites": "30",
        "#KitComponentSupplied": "30",
        "#KitComponentPending": "30",
        "DateKitatFirstSite": "14Feb2024",
        "Status": "20%"
      },
      {
        "Actions": "",
        "Country": "Russia",
        "Sites": "10",
        "#KitComponentSupplied": "20",
        "#KitComponentPending": "0",
        "DateKitatFirstSite": "15Mar2024",
        "Status": "100%"
      },
      {
        "Actions": "",
        "Country": "Ireland",
        "Sites": "5",
        "#KitComponentSupplied": "10",
        "#KitComponentPending": "90",
        "DateKitatFirstSite": "15May2024",
        "Status": "40%"
      },
      {
        "Actions": "",
        "Country": "China",
        "Sites": "23",
        "#KitComponentSupplied": "10",
        "#KitComponentPending": "95",
        "DateKitatFirstSite": "15May2024",
        "Status": "85%"
      }
    ];
  }

  getSites() {
    return [
      {
        "SiteID": "1112",
        "City": "CityName",
        "Country": "USA",
        "Region": "Europe",
        "QtyRequired": "5",
        "QtySupplied": "3",
        "Status": "Planned",
        "DateKitatFirstSite": "15Mar2024",
        "Status Y": "50%"
      },
      {
        "SiteID": "1156",
        "City": "CityName",
        "Country": "Singapore",
        "Region": "Europe",
        "QtyRequired": "4",
        "QtySupplied": "2",
        "Status": "Un-Planned",
        "DateKitatFirstSite": "14Mar2024",
        "Status Y": "20%"
      },
      {
        "SiteID": "1025",
        "City": "CityName",
        "Country": "Russia",
        "Region": "Europe",
        "QtyRequired": "10",
        "QtySupplied": "3",
        "Status": "DateExceeded",
        "DateKitatFirstSite": "15Mar2024"
      },
      {
        "SiteID": "1015",
        "City": "City Name",
        "Country": "Ireland",
        "Region": "Europe",
        "QtyRequired": "3",
        "QtySupplied": "3",
        "Status": "Un-Planned",
        "DateKitatFirstSite": "15Mar2024",
        "Status Y": "40%"
      },
      {
        "SiteID": "2015",
        "City": "CityName",
        "Country": "China",
        "Region": "Asia",
        "QtyRequired": "4",
        "QtySupplied": "2",
        "Status": "Planned",
        "DateKitatFirstSite": "15Mar2024",
        "Status Y": "85%"
      }
    ];
  }

  getInventoryReviewData() {
    return [
        {
          "productNo": "MD-001",
          "componentName": "InvestigatorManual English",
          "itemType": "B",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 0,
          "newItemFarmingdale": 0,
          "newItemMidland": 0,
          "kitProductionLocations": []
        },
        {
          "productNo": "0178",
          "componentName": "LabCertificate-ICL",
          "itemType": "",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 500,
          "newItemFarmingdale": 49300,
          "newItemMidland": 49300,
          "kitProductionLocations": []
        },
        {
          "productNo": "8169",
          "componentName": "Summary/CollectionGuideEnglish",
          "itemType": "D",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 500,
          "newItemFarmingdale": 49300,
          "newItemMidland": 49300,
          "kitProductionLocations": []
        },
        {
          "productNo": "GAHCG-102a",
          "componentName": "PregnancyHCG urine Kit(CEMarked)W/Instructions",
          "itemType": "",
          "qtyNeededInitialShipment": 30,
          "qtyNeededStudyDuration": 165,
          "newItemBuford": 16250,
          "newItemFarmingdale": 7256,
          "newItemMidland": 50,
          "kitProductionLocations": []
        },
        {
          "productNo": "10316",
          "componentName": "6Segmented AbsorbentPouch",
          "itemType": "",
          "qtyNeededInitialShipment": 185,
          "qtyNeededStudyDuration": 1000,
          "newItemBuford": 0,
          "newItemFarmingdale": 0,
          "newItemMidland": 0,
          "kitProductionLocations": []
        },
        {
          "productNo": "BM087X121CON",
          "componentName": "7x11 95KPABiohazardBag",
          "itemType": "",
          "qtyNeededInitialShipment": 185,
          "qtyNeededStudyDuration": 1000,
          "newItemBuford": 0,
          "newItemFarmingdale": 0,
          "newItemMidland": 0,
          "kitProductionLocations": []
        },
        {
          "productNo": "135030Bag",
          "componentName": "Bagof1003mlTransferPipette",
          "itemType": "A",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 312547,
          "newItemFarmingdale": 0,
          "newItemMidland": "D",
          "kitProductionLocations": []
        },
        {
          "productNo": "95.064.981",
          "componentName": "81Insert(Iml,1.8ml or2mlTube)CryoBoxw/Large95KPA...",
          "itemType": "A",
          "qtyNeededInitialShipment": 12,
          "qtyNeededStudyDuration": 64,
          "newItemBuford": 1687,
          "newItemFarmingdale": 6526,
          "newItemMidland": 0,
          "kitProductionLocations": []
        },
        {
          "productNo": "243610",
          "componentName": "90mlYellow NoAdditivePlasticParterMedicalScrew To....",
          "itemType": "g",
          "qtyNeededInitialShipment": 42,
          "qtyNeededStudyDuration": 330,
          "newItemBuford": 3991,
          "newItemFarmingdale": "°",
          "newItemMidland": 0,
          "kitProductionLocations": []
        }
      ];
    }

    getItemSummary(): any {
      return {
        itemNumber: '01-213-100-Z',
        sponsors: 200,
        locations: {
          total: 90,
          completed: 50,
          completionDate: new Date('2024-03-22'),
          targetDate: new Date('2024-09-15')
        },
        protocols: {
          total: 1580,
          remainingLocations: 40,
          kitsRequired: 1600
        },
        orders: {
          initialWorkOrders: 600,
          purchaseOrders: 20,
          kitsRequired: 1600,
          kitsAvailable: 500,
          purchaseOrdersValue: 900
        }
      };
    }
  }
