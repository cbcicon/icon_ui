import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from '../../../common/util';
import { of } from 'rxjs';

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
        "DateKOS": "15Mar2024",
        "FPFV": "15Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "Singapore",
        "Sites": "30",
        "#KitComponentSupplied": "30",
        "#KitComponentPending": "30",
        "DateKOS": "14Feb2024",
        "FPFV": "14Feb2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "Russia",
        "Sites": "10",
        "#KitComponentSupplied": "20",
        "#KitComponentPending": "0",
        "DateKOS": "15Mar2024",
        "FPFV": "15Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "Ireland",
        "Sites": "5",
        "#KitComponentSupplied": "10",
        "#KitComponentPending": "90",
        "DateKOS": "15May2024",
        "FPFV": "15May2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "China",
        "Sites": "23",
        "#KitComponentSupplied": "10",
        "#KitComponentPending": "95",
        "DateKOS": "15May2024",
        "FPFV": "15May2024",
        "Progress": "50"
      }
    ];
  }

  getSites() {
    return [
      {
        "Actions": "",
        "Site": "1112",
        "Country": "USA",
        "City": "Phoenix",
        "Region": "NA",
        "QtyRequired": "5",
        "QtyRemaining": "3",
        "Status": "Planned",
        "DateKOS": "15Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Site": "1156",
        "Country": "Japan",
        "City": "Tokyo",
        "Region": "APAC",
        "QtyRequired": "4",
        "QtyRemaining": "2",
        "Status": "Un-Planned",
        "DateKOS": "14Mar2024",
        "Progress": ""
      },
      {
        "Actions": "",
        "Site": "1025",
        "Country": "Russia",
        "City": "Moscow",
        "Region": "EMEA",
        "QtyRequired": "10",
        "QtyRemaining": "3",
        "Status": "Date Exceeded",
        "DateKOS": "15Mar2024",
        "Progress":""
      },
      {
        "Actions": "",
        "Site": "1015",
        "Country": "India",
        "City": "Hyderabad",
        "Region": "APAC",
        "QtyRequired": "3",
        "QtyRemaining": "3",
        "Status": "Un-Planned",
        "DateKOS": "15Mar2024",
        "Progress": ""
      },
      {
        "Actions": "",
        "Site": "2015",
        "Country": "Italy",
        "City": "Rome",
        "Region": "EMEA",
        "QtyRequired": "4",
        "QtyRemaining": "2",
        "Status": "Planned",
        "DateKOS": "15Mar2024",
        "Progress": "50"
      }
    ];
  }

  getInventoryReviewData() {
    return [
        {
          "productNo": "MD-001",
          "componentName": "InvestigatorManual English",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 0,
          "newItemFarmingdale": 0,
          "newItemMidland": 0,
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "0178",
          "componentName": "LabCertificate-ICL",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 500,
          "newItemFarmingdale": 49300,
          "newItemMidland": 49300,
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "8169",
          "componentName": "Summary/CollectionGuideEnglish",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 500,
          "newItemFarmingdale": 49300,
          "newItemMidland": 49300,
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "GAHCG-102a",
          "componentName": "PregnancyHCG urine Kit(CEMarked)W/Instructions",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 30,
          "qtyNeededStudyDuration": 165,
          "newItemBuford": 16250,
          "newItemFarmingdale": 7256,
          "newItemMidland": 50,
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "10316",
          "componentName": "6Segmented AbsorbentPouch",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 185,
          "qtyNeededStudyDuration": 1000,
          "newItemBuford": 0,
          "newItemFarmingdale": 0,
          "newItemMidland": 0,
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "BM087X121CON",
          "componentName": "7x11 95KPABiohazardBag",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 185,
          "qtyNeededStudyDuration": 1000,
          "newItemBuford": 0,
          "newItemFarmingdale": 0,
          "newItemMidland": 0,
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "135030Bag",
          "componentName": "Bagof1003mlTransferPipette",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 1,
          "qtyNeededStudyDuration": 5,
          "newItemBuford": 312547,
          "newItemFarmingdale": 0,
          "newItemMidland": "D",
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "95.064.981",
          "componentName": "81Insert(Iml,1.8ml or2mlTube)CryoBoxw/Large95KPA...",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 12,
          "qtyNeededStudyDuration": 64,
          "newItemBuford": 1687,
          "newItemFarmingdale": 6526,
          "newItemMidland": 0,
          "kitProductionLocations": [],
          "replacementneeded":[]
        },
        {
          "productNo": "243610",
          "componentName": "90mlYellow NoAdditivePlasticParterMedicalScrew To....",
          "itemType": "",
          "newitem":"",
          "kitvendor":"",
          "qtyNeededInitialShipment": 42,
          "qtyNeededStudyDuration": 330,
          "newItemBuford": 3991,
          "newItemFarmingdale": "°",
          "newItemMidland": 0,
          "kitProductionLocations": [],
          "replacementneeded":[]
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

    getStudyData() {
    
      let data = [
        {
          "sponsor": "2SeventyBio",
          "protocol_id": "CRC-403",
          "study_type":"Live",
          "countries": 5,
          "sites": 5,
          "sites_remaining": 3,
          "subjects_screened": 50,
          "qty_of_kits_study": 650,
          "qty_of_kits_initial": 120,
          "visits": 13,
          "pre_label_y": "Yes",
          "production_location":"-",
          "date_kos": "15 Apr2024",
          "revenue_gen": "$2,348"
      },
      {
          "sponsor": "4DMolecularTherapeu",
          "protocol_id": "1517-CL-0101",
          "study_type":"New",
          "countries": 10,
          "sites": 10,
          "sites_remaining": 5,
          "subjects_screened": 90,
          "qty_of_kits_study": 540,
          "qty_of_kits_initial": 160,
          "visits": 14,
          "pre_label_y": "No",
          "production_location":"-",
          "date_kos": "04Apr2024",
          "revenue_gen": "$2,348"
      },
      {
        "sponsor": "4SC AG",
        "protocol_id": "18331A",
        "study_type":"New",
        "countries": 3,
        "sites": 3,
        "sites_remaining": 1,
        "subjects_screened": 20,
        "qty_of_kits_study": 700,
        "qty_of_kits_initial": 130,
        "visits": 20,
        "pre_label_y": "No",
        "production_location": "-",
        "date_kos": "30Mar2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "AbbottBiologicalsB.V.",
        "protocol_id": "19-2360",
        "study_type":"Live",
        "countries": 2,
        "sites": 2,
        "sites_remaining": 1,
        "subjects_screened": 25,
        "qty_of_kits_study": 400,
        "qty_of_kits_initial": 100,
        "visits": 12,
        "pre_label_y": "Yes",
        "production_location": "-",
        "date_kos": "25 Mar2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "AbbottDiabetesCare",
        "protocol_id": "20060342EU",
        "study_type":"Live",
        "countries": 5,
        "sites": 5,
        "sites_remaining": 4,
        "subjects_screened": 10,
        "qty_of_kits_study": 969,
        "qty_of_kits_initial": 324,
        "visits": 15,
        "pre_label_y": "Yes",
        "production_location": "-",
        "date_kos": "19Mar2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "AbbVie",
        "protocol_id": "20060342US",
        "study_type":"Live",
        "countries": 18,
        "sites": 18,
        "sites_remaining": 8,
        "subjects_screened": 19,
        "qty_of_kits_study": 1717,
        "qty_of_kits_initial": 500,
        "visits": 25,
        "pre_label_y": "Yes",
        "production_location": "-",
        "date_kos": "13 Mar2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "AbGenomicsInternatio...",
        "protocol_id": "20150164",
        "study_type":"New",
        "countries": 4,
        "sites": 4,
        "sites_remaining": 2,
        "subjects_screened": 30,
        "qty_of_kits_study": 200,
        "qty_of_kits_initial": 50,
        "visits": 18,
        "pre_label_y": "No",
        "production_location": "-",
        "date_kos": "02Mar2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "Acepodia Biotech",
        "protocol_id": "2138-CL-0101",
        "study_type":"New",
        "countries": 8,
        "sites": 8,
        "sites_remaining": 4,
        "subjects_screened": 70,
        "qty_of_kits_study": 350,
        "qty_of_kits_initial": 180,
        "visits": 16,
        "pre_label_y": "No",
        "production_location": "-",
        "date_kos": "28Feb2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "AdicetBio,Inc.",
        "protocol_id": "2215-CL-0203",
        "study_type":"New",
        "countries": 6,
        "sites": 6,
        "sites_remaining": 3,
        "subjects_screened": 60,
        "qty_of_kits_study": 2000,
        "qty_of_kits_initial": 850,
        "visits": 10,
        "pre_label_y": "Yes",
        "production_location": "-",
        "date_kos": "19Feb 2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "Agios Pharmaceuticals....",
        "protocol_id": "2802-CL-0603",
        "study_type":"Live",
        "countries": 4,
        "sites": 4,
        "sites_remaining": 1,
        "subjects_screened": 80,
        "qty_of_kits_study": 1600,
        "qty_of_kits_initial": 560,
        "visits": 5,
        "pre_label_y": "No",
        "production_location": "-",
        "date_kos": "14Feb 2024",
        "revenue_gen": "$2,348"
      },
      {
        "sponsor": "Albireo",
        "protocol_id": "3082-CL-0101",
        "study_type":"Live",
        "countries": 7,
        "sites": 7,
        "sites_remaining": 4,
        "subjects_screened": 50,
        "qty_of_kits_study": 1540,
        "qty_of_kits_initial": 350,
        "visits": 15,
        "pre_label_y": "Yes",
        "production_location": "-",
        "date_kos": "09Feb2024",
        "revenue_gen": "$2,348"
      }
    ];
  }

  getMdpData(){
    let mdpData  = [
       {
       action : 'action',
       productionLocation:'hyd',
       quantity: 2000,
       price: 3000,
       discounted_price: 1500,
       discount_percentage: 80,
      quantity1: 2000,
       price1: 3000,
       discounted_price1: 1500,
       discount_percentage1: 80,
       quantity2: 2000,
       price2: 3000,
       discounted_price2: 1500,
       discount_percentage2: 80,
       quantity3: 2000,
       price3: 3000,
       discounted_price3: 1500,
       discount_percentage3: 80,
     },
   
     {
       action : 'action',
       productionLocation:'hyd',
       quantity: 2000,
       price: 3000,
       discounted_price: 1500,
       discount_percentage: 80,
      quantity1: 2000,
       price1: 3000,
       discounted_price1: 1500,
       discount_percentage1: 80,
       quantity2: 2000,
       price2: 3000,
       discounted_price2: 1500,
       discount_percentage2: 80,
       quantity3: 2000,
       price3: 3000,
       discounted_price3: 1500,
       discount_percentage3: 80,
     },
     {
       action : 'action',
       productionLocation:'hyd',
       quantity: 2000,
       price: 3000,
       discounted_price: 1500,
       discount_percentage: 80,
      quantity1: 2000,
       price1: 3000,
       discounted_price1: 1500,
       discount_percentage1: 80,
       quantity2: 2000,
       price2: 3000,
       discounted_price2: 1500,
       discount_percentage2: 80,
       quantity3: 2000,
       price3: 3000,
       discounted_price3: 1500,
       discount_percentage3: 80,
     },
     {
       action : 'action',
       productionLocation:'hyd',
       quantity: 2000,
       price: 3000,
       discounted_price: 1500,
       discount_percentage: 80,
      quantity1: 2000,
       price1: 3000,
       discounted_price1: 1500,
       discount_percentage1: 80,
       quantity2: 2000,
       price2: 3000,
       discounted_price2: 1500,
       discount_percentage2: 80,
       quantity3: 2000,
       price3: 3000,
       discounted_price3: 1500,
       discount_percentage3: 80,
     },
     {
       action : 'action1',
       productionLocation:'hyd',
       quantity: 2000,
       price: 3000,
       discounted_price: 1500,
       discount_percentage: 80,
      quantity1: 2000,
       price1: 3000,
       discounted_price1: 1500,
       discount_percentage1: 80,
       quantity2: 2000,
       price2: 3000,
       discounted_price2: 1500,
       discount_percentage2: 80,
       quantity3: 2000,
       price3: 3000,
       discounted_price3: 1500,
       discount_percentage3: 80,
     },
    ]
   return mdpData
   }

    getProductionLocationDetailsData(){
     return [
        {
          name: "Farmingdale",
          total_kit_capacity_per_month: 25000,
          allotted_capacity_per_month: 20000,
          sponsor: "All",
          level_1: "30%",
          level_2: "50%",
          level_3: "70%",
          level_4: "20%",
          level_5: "75%"
    
        },
        {
          name: "Farmingdale",
          total_kit_capacity_per_month: 10000,
          allotted_capacity_per_month: 10000,
          sponsor: "Novartis",
    
          level_1: "15%",
          level_2: "25%",
          level_3: "35%",
          level_4: "10%",
          level_5: "30%"
    
        },
        {
          name: "Farmingdale",
          total_kit_capacity_per_month: 10000,
          allotted_capacity_per_month: 10000,
          sponsor: "Molecular",
    
          level_1: "15%",
          level_2: "25%",
          level_3: "35%",
          level_4: "10%",
          level_5: "45%"
    
        },
        {
          name: "Buford",
          total_kit_capacity_per_month: 35000,
          allotted_capacity_per_month: 5000,
          sponsor: "All",
    
          level_1: "40%",
          level_2: "30%",
          level_3: "50%",
          level_4: "25%",
          level_5: "45%"
        }
        ,
        {
          name: "Buford",
          total_kit_capacity_per_month: 3000,
          allotted_capacity_per_month: 3000,
          sponsor: "Assembly Bio",
    
          level_1: "20%",
          level_2: "15%",
          level_3: "25%",
          level_4: "10%",
          level_5: "20%"
    
        },
        {
          name: "Buford",
          total_kit_capacity_per_month: 2000,
          allotted_capacity_per_month: 2000,
          sponsor: "Mankind",
    
          level_1: "20%",
          level_2: "15%",
          level_3: "25%",
          level_4: "15%",
          level_5: "25%"
    
        },
        {
          name: "Therapak",
          total_kit_capacity_per_month: 40000,
          allotted_capacity_per_month: 18000,
          sponsor: "All",
    
          level_1: "50%",
          level_2: "60%",
          level_3: "80%",
          level_4: "35%",
          level_5: "35%"
    
        },
        {
          name: "Therapak",
          total_kit_capacity_per_month: 35000,
          allotted_capacity_per_month: 35000,
          sponsor: "Pfizer",
    
          level_1: "50%",
          level_2: "60%",
          level_3: "80%",
          level_4: "35%",
          level_5: "35%"
        }
      ]
    }


    getAdvanceLocationDetail(){
      return  [
        {
            Location: "Farmingdale",
            Sponsor: "Pfizer",
            Protocol: "PD- 001",
            Demand_Type: "Forecast/ Live",
            Demand_Kits: "300",
            Cohort: "Standard",
            Visit: "v3",
            Kit_Name: "Kit v3",
            Inventory_Rate: "30%",
            Fulfillment_Status: "10%",
            Level_1: "200",
            Level_2: "",
            Level_3: "",
            Level_4: "",
            Level_5: "",
            Level_6: "4000"
        },
        {
            Location: "Farmingdale",
            Sponsor: "Pfizer",
            Protocol: "PD- 001",
            Demand_Type: "Current demand",
            Demand_Kits: "800",
            Cohort: "Standard",
            Visit: "Unscheduled",
            Kit_Name: "Unscheduled",
            Inventory_Rate: "20%",
            Fulfillment_Status: "40%",
            Level_1: "",
            Level_2: "",
            Level_3: "",
            Level_4: "",
            Level_5: "",
            Level_6: "100"
        },
        {
            Location: "Farmingdale",
            Sponsor: "Pfizer",
            Protocol: "PD- 002",
            Demand_Type: "New",
            Demand_Kits: "500",
            Cohort: "Standard",
            Visit: "v5",
            Kit_Name: "Kit v5",
            Inventory_Rate: "15%",
            Fulfillment_Status: "35%",
            Level_1: "",
            Level_2: "100",
            Level_3: "",
            Level_4: "",
            Level_5: "",
            Level_6: "300"
        },
        {
            Location: "Buford",
            Sponsor: "Molecular",
            Protocol: "PD- 003",
            Demand_Type: "Forecast/ Live",
            Demand_Kits: "200",
            Cohort: "Standard",
            Visit: "v3",
            Kit_Name: "Kit v3",
            Inventory_Rate: "50%",
            Fulfillment_Status: "45%",
            Level_1: "",
            Level_2: "200",
            Level_3: "",
            Level_4: "200",
            Level_5: "",
            Level_6: ""
        },
        {
            Location: "Midland",
            Sponsor: "Novaitis",
            Protocol: "PD- 002",
            Demand_Type: "Forecast/ Live",
            Demand_Kits: "200",
            Cohort: "Standard",
            Visit: "vl",
            Kit_Name: "Kit vl",
            Inventory_Rate: "25%",
            Fulfillment_Status: "70%",
            Level_1: "",
            Level_2: "",
            Level_3: "",
            Level_4: "",
            Level_5: "",
            Level_6: "300"
        },
        {
            Location: "Therapak",
            Sponsor: "Assembly",
            Protocol: "PD- 002",
            Demand_Type: "New",
            Demand_Kits: "500",
            Cohort: "Standard",
            Visit: "vl",
            Kit_Name: "Kit vl",
            Inventory_Rate: "35%",
            Fulfillment_Status: "68%",
            Level_1: "300",
            Level_2: "400",
            Level_3: "",
            Level_4: "",
            Level_5: "",
            Level_6: "100"
        }
    ]
    }

    updateCountry(country: any) {
      return of(country); 
    }

    updateSite(site:any){
      return of(site);
    }

  updateInventoryItem(item: any) {
    return of(item); 
  }

  getLiveCountries() {
    return [
      {
        "Actions": "",
        "Country": "USA",
        "Sites": "5",
        "#KitSupplied": "10",
        "#KitPending": "80",
        "DateKOS": "15Mar2024",
        "FPFV": "15Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "Singapore",
        "Sites": "30",
        "#KitSupplied": "30",
        "#KitPending": "30",
        "DateKOS": "14Feb2024",
        "FPFV": "14Feb2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "Russia",
        "Sites": "10",
        "#KitSupplied": "20",
        "#KitPending": "0",
        "DateKOS": "15Mar2024",
        "FPFV": "15Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "Ireland",
        "Sites": "5",
        "#KitSupplied": "10",
        "#KitPending": "90",
        "DateKOS": "15May2024",
        "FPFV": "15May2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Country": "China",
        "Sites": "23",
        "#KitSupplied": "10",
        "#KitPending": "95",
        "DateKOS": "15May2024",
        "FPFV": "15May2024",
        "Progress": "50"
      }
    ];
  }

  getLiveSites() {
    return [
      {
        "Actions": "",
        "Site": "1112",
        "Country": "USA",
        "City": "Phoenix",
        "Region": "NA",
        "QtyRequired": "5",
        "QtyRemaining": "3",
        "DateKOS": "15Mar2024",
        "StudyStartDate": "15Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Site": "1156",
        "Country": "Japan",
        "City": "Tokyo",
        "Region": "APAC",
        "QtyRequired": "4",
        "QtyRemaining": "2",
        "DateKOS": "14Mar2024",
        "StudyStartDate": "14Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Site": "1025",
        "Country": "Russia",
        "City": "Moscow",
        "Region": "EMEA",
        "QtyRequired": "10",
        "QtyRemaining": "3",
        "DateKOS": "15Mar2024",
        "StudyStartDate": "15Mar2024",
        "Progress":"50"
      },
      {
        "Actions": "",
        "Site": "1015",
        "Country": "India",
        "City": "Hyderabad",
        "Region": "APAC",
        "QtyRequired": "3",
        "QtyRemaining": "3",
        "DateKOS": "15Mar2024",
        "StudyStartDate": "15Mar2024",
        "Progress": "50"
      },
      {
        "Actions": "",
        "Site": "2015",
        "Country": "Italy",
        "City": "Rome",
        "Region": "EMEA",
        "QtyRequired": "4",
        "QtyRemaining": "2",
        "DateKOS": "15Mar2024",
        "StudyStartDate": "15Mar2024",
        "Progress": "50"
      }
    ];
  }

  getLiveVisits() {
    return [
      {
        "VisitName": "A2 C11 D1",
        "VisitType": "Scheduled",
        "VisitCategory": "Study in Setup",
        "VisitInterval": "10",
        "MultiVisit": "Yes",
        "Cohort": "Standard Cohort",
        "Kits": "2",
        "ScheduledDate": "15Mar2024"
      },
      {
        "VisitName": "A2 C13 D1",
        "VisitType": "Scheduled",
        "VisitCategory": "Baseline",
        "VisitInterval": "20",
        "MultiVisit": "Yes",
        "Cohort": "Standard Cohort",
        "Kits": "2",
        "ScheduledDate": "18Jan2024"
      },
      {
        "VisitName": "A2 C15 D1",
        "VisitType": "Unscheduled",
        "VisitCategory": "Current Subjects -Scheduled ",
        "VisitInterval": "-10",
        "MultiVisit": "No",
        "Cohort": "Standard Cohort",
        "Kits": "4",
        "ScheduledDate": "23Jan2024"
      },
      {
        "VisitName": "A2 C17 D1",
        "VisitType": "Unscheduled",
        "VisitCategory": "Future Subjects - Scheduled",
        "VisitInterval": "-5",
        "MultiVisit": "No",
        "Cohort": "Standard Cohort",
        "Kits": "2",
        "ScheduledDate": "7Feb2024"
      },
      {
        "VisitName": "A2 C19 D1",
        "VisitType": "Unscheduled",
        "VisitCategory": "Optional",
        "VisitInterval": "20",
        "MultiVisit": "Yes",
        "Cohort": "Standard Cohort",
        "Kits": "5",
        "ScheduledDate": "10Feb2024"
      },
      {
        "VisitName": "A2 C1 D1",
        "VisitType": "Scheduled",
        "VisitCategory": "Screen",
        "VisitInterval": "10",
        "MultiVisit": "No",
        "Cohort": "Standard Cohort",
        "Kits": "10",
        "ScheduledDate": "19Feb2024"
      },
      {
        "VisitName": "A2 C1 D15",
        "VisitType": "Scheduled",
        "VisitCategory": "Initial Supplies",
        "VisitInterval": "20",
        "MultiVisit": "Yes",
        "Cohort": "Standard Cohort",
        "Kits": "3",
        "ScheduledDate": "22Feb2024"
      }
    ];
  }

  getLiveKits() {
    return [
      {
        "Actions": "",
        "KitName": "A2 Tissue Kit",
        "KitQty": "4",
        "KitCategory": "PCR Tube",
        "ItemComponents": "7",
        "PreLabel": "Yes",
        "Complexity": "High",
        "SpecialInstructions": "This Kit Requires It"
      },
      {
        "Actions": "",
        "KitName": "Week 52",
        "KitQty": "5",
        "KitCategory": "Cryptube",
        "ItemComponents": "5",
        "PreLabel": "Yes",
        "Complexity": "High",
        "SpecialInstructions": "For Canada Sites"
      },
      {
        "Actions": "",
        "KitName": "PK Kit",
        "KitQty": "6",
        "KitCategory": "Microcentrifuge Tube",
        "ItemComponents": "5",
        "PreLabel": "No",
        "Complexity": "Low",
        "SpecialInstructions": "All orders going to "
      },
      {
        "Actions": "",
        "KitName": "Genkit 07",
        "KitQty": "3",
        "KitCategory": "Collection Tubes",
        "ItemComponents": "3",
        "PreLabel": "No",
        "Complexity": "Low",
        "SpecialInstructions": ""
      },
      {
        "Actions": "",
        "KitName": "Final Visit Kit",
        "KitQty": "8",
        "KitCategory": "Reagent",
        "ItemComponents": "10",
        "PreLabel": "Yes",
        "Complexity": "High",
        "SpecialInstructions": "If Ordered In Bulk"
      },
      {
        "Actions": "",
        "KitName": "Baseline Kit",
        "KitQty": "3",
        "KitCategory": "Buffer",
        "ItemComponents": "5",
        "PreLabel": "Yes",
        "Complexity": "High",
        "SpecialInstructions": ""
      },
      {
        "Actions": "",
        "KitName": "Multivisit",
        "KitQty": "7",
        "KitCategory": "Syringe",
        "ItemComponents": "5",
        "PreLabel": "No",
        "Complexity": "Low",
        "SpecialInstructions": "If Ordered In Bulk"
      }
    ];
  }

  getLiveWorkOrders() {
    return [
      {
        "Actions": "",
        "WorkOrder": "W04583435",
        "ProductionLocation": "Midland",
        "OrderType": "Re-order",
        "Site": "2432",
        "Kits": "5",
        "Recipient": "Karfidova",
        "Status": "Batch Picked",
        "DaysCreated": "10",
        "MultiLabel": "Yes",
        "CreatedDate":"22Feb2024",
        "DueDate":"15Jan2024",
        "EstShippingDate":"15Jan2024",
        "AssignedTo":"Shannon",
        "PMApproval":"Yes"
      },
      {
        "Actions": "",
        "WorkOrder": "W03453434",
        "ProductionLocation": "Farmingdale",
        "OrderType": "Initial",
        "Site": "4234",
        "Kits": "3",
        "Recipient": "Karfidova",
        "Status": "Pending",
        "DaysCreated": "12",
        "MultiLabel": "Yes",
        "CreatedDate":"19Feb2024",
        "DueDate":"18Jan2024",
        "EstShippingDate":"23Jan2024",
        "AssignedTo":"Chole Sim",
        "PMApproval":"Yes"
      },
      {
        "Actions": "",
        "WorkOrder": "W06578678",
        "ProductionLocation": "Buford",
        "OrderType": "Initial",
        "Site": "5345",
        "Kits": "4",
        "Recipient": "Rebollar",
        "Status": "Awaiting QC",
        "DaysCreated": "2",
        "MultiLabel": "No",
        "CreatedDate":"10Feb2024",
        "DueDate":"23Jan2024",
        "EstShippingDate":"7Feb2024",
        "AssignedTo":"Shon Evans",
        "PMApproval":"No"
      },
      {
        "Actions": "",
        "WorkOrder": "W03243534",
        "ProductionLocation": "Farmingdale",
        "OrderType": "Portal",
        "Site": "546",
        "Kits": "3",
        "Recipient": "Efron Beatriz",
        "Status": "Staged",
        "DaysCreated": "4",
        "MultiLabel": "No",
        "CreatedDate":"7Feb2024",
        "DueDate":"7Feb2024",
        "EstShippingDate":"10Feb2024",
        "AssignedTo":"Benjamin",
        "PMApproval":"No"
      },
      {
        "Actions": "",
        "WorkOrder": "W06576877",
        "ProductionLocation": "Midland",
        "OrderType": "Re-order",
        "Site": "5667",
        "Kits": "2",
        "Recipient": "Rio Julieta",
        "Status": "Batch Picked",
        "DaysCreated": "6",
        "MultiLabel": "No",
        "CreatedDate":"23an2024",
        "DueDate":"10Feb2024",
        "EstShippingDate":"19Feb2024",
        "AssignedTo":"Chloe Sim",
        "PMApproval":"No"
      },
      {
        "Actions": "",
        "WorkOrder": "W07899897",
        "ProductionLocation": "Therepak",
        "OrderType": "Initial",
        "Site": "6787",
        "Kits": "6",
        "Recipient": "Choi Mi",
        "Status": "Batch Picked",
        "DaysCreated": "3",
        "MultiLabel": "Yes",
        "CreatedDate":"18Jan2024",
        "DueDate":"19Feb2024",
        "EstShippingDate":"22Feb2024",
        "AssignedTo":"Benjamin",
        "PMApproval":"No"
      },
      {
        "Actions": "",
        "WorkOrder": "W02321333",
        "ProductionLocation": "Therepak",
        "OrderType": "Manual",
        "Site": "787",
        "Kits": "4",
        "Recipient": "Choi Kevin",
        "Status": "Staged",
        "DaysCreated": "17",
        "MultiLabel": "Yes",
        "CreatedDate":"15Jan2024",
        "DueDate":"22Feb2024",
        "EstShippingDate":"22Mar2024",
        "AssignedTo":"Shon Evans",
        "PMApproval":"Yes"
      }
    ];
  }
  
  getLiveAdvancedKits() {
    return [
      {
        "Actions": "",
        "Item": "MD-001",
        "ItemDescription": "10ml Pregnancy HCG urine kit (CE Marked)W/Instructions",
        "ItemType": "",
        "ComponentType": "Container",
        "BOMQty": "5",
        "TotalQty": "20",
        "QtyEarlyExpiry": "1000",
		    "OnStock":"3452",
		    "Ringfence":"3452",
		    "Replacement":"Yes"
      },
      {
        "Actions": "",
        "Item": "0178",
        "ItemDescription": "Lab Certificate-ICL",
        "ItemType": "",
        "ComponentType": "Other",
        "BOMQty": "6",
        "TotalQty": "24",
        "QtyEarlyExpiry": "200",
		    "OnStock":"4564",
		    "Ringfence":"4564",
		    "Replacement":"Yes"
      },
      {
        "Actions": "",
        "Item": "8169",
        "ItemDescription": "Summary/Collection Guide English",
        "ItemType": "",
        "ComponentType": "Bundle",
        "BOMQty": "4",
        "TotalQty": "16",
        "QtyEarlyExpiry": "400",
		    "OnStock":"34565",
		    "Ringfence":"34565",
		    "Replacement":"No"
      },
      {
        "Actions": "",
        "Item": "GAHCG-102a",
        "ItemDescription": "Pregnancy HCG urine kit (CE Marked)W/Instructions",
        "ItemType": "",
        "ComponentType": "Document",
        "BOMQty": "5",
        "TotalQty": "20",
        "QtyEarlyExpiry": "100",
		    "OnStock":"34535",
		    "Ringfence":"34535",
		    "Replacement":"Yes"
      },
      {
        "Actions": "",
        "Item": "10316",
        "ItemDescription": "6 Segmented Absorbent Pouch",
        "ItemType": "",
        "ComponentType": "Bundle",
        "BOMQty": "7",
        "TotalQty": "28",
        "QtyEarlyExpiry": "200",
		    "OnStock":"43232",
		    "Ringfence":"43232",
		    "Replacement":"No"
      },
      {
        "Actions": "",
        "Item": "BM087X12ICON",
        "ItemDescription": " 7 * 11 95KPA Biohazard Bag",
        "ItemType": "",
        "ComponentType": "Other",
        "BOMQty": "10",
        "TotalQty": "40",
        "QtyEarlyExpiry": "500",
		    "OnStock":"76867",
		    "Ringfence":"76867",
		    "Replacement":"Yes"
      },
      {
        "Actions": "",
        "Item": "135030Bag",
        "ItemDescription": "Bag of 100 3ml Transfer Pipette",
        "ItemType": "",
        "ComponentType": "Container",
        "BOMQty": "3",
        "TotalQty": "12",
        "QtyEarlyExpiry": "1000",
		    "OnStock":"23445",
		    "Ringfence":"23445",
		    "Replacement":"Yes"
      }
    ];
  }
}