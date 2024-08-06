import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private sanitizer: DomSanitizer) { }

  getRevenueData(): Observable<any[]> {
    const data = [
      {
        Actions: "",
        productionlocation: "All",
        cumulativerevenue: "$3447",
        margin: "20.2",
        newItemGoalPerMonthJan: "$1200",
        newItemRevenuePerMonthJan: "$1013",
        newItemVariationInJan: "-16%",
        newItemGoalPerMonthFeb: "$880",
        newItemRevenuePerMonthFeb: "$1013",
        newItemVariationInFeb: "15%",
        newItemGoalPerMonthMar: "$1200",
        newItemRevenuePerMonthMar: "$1013",
        newItemVariationInMar: "-16%",
        Details: [
          {
            Actions: "",
            productionlocation: this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>FarmingDale</a>"),
            cumulativerevenue: "$447",
            margin: "10",
            newItemGoalPerMonthJan: "$100",
            newItemRevenuePerMonthJan: "$113",
            newItemVariationInJan: "-0.9%",
            newItemGoalPerMonthFeb: "$400",
            newItemRevenuePerMonthFeb: "$113",
            newItemVariationInFeb: "3%",
            newItemGoalPerMonthMar: "$200",
            newItemRevenuePerMonthMar: "$113",
            newItemVariationInMar: "-2%",
          },
          {
            Actions: "",
            productionlocation: this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Buford</a>"),
            cumulativerevenue: "$1000",
            margin: "-2",
            newItemGoalPerMonthJan: "$90",
            newItemRevenuePerMonthJan: "$400",
            newItemVariationInJan: "-3%",
            newItemGoalPerMonthFeb: "$200",
            newItemRevenuePerMonthFeb: "$400",
            newItemVariationInFeb: "4%",
            newItemGoalPerMonthMar: "$200",
            newItemRevenuePerMonthMar: "$400",
            newItemVariationInMar: "-3%",
          },
          {
            Actions: "",
            productionlocation: this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Therepak</a>"),
            cumulativerevenue: "$1200",
            margin: "-10.2",
            newItemGoalPerMonthJan: "$110",
            newItemRevenuePerMonthJan: "$200",
            newItemVariationInJan: "-5%",
            newItemGoalPerMonthFeb: "$80",
            newItemRevenuePerMonthFeb: "$200",
            newItemVariationInFeb: "2%",
            newItemGoalPerMonthMar: "$400",
            newItemRevenuePerMonthMar: "$200",
            newItemVariationInMar: "-2%",
          },
          {
            Actions: "",
            productionlocation: this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Midland</a>"),
            cumulativerevenue: "$800",
            margin: "-15.2",
            newItemGoalPerMonthJan: "$900",
            newItemRevenuePerMonthJan: "$300",
            newItemVariationInJan: "-5%",
            newItemGoalPerMonthFeb: "$200",
            newItemRevenuePerMonthFeb: "$300",
            newItemVariationInFeb: "6%",
            newItemGoalPerMonthMar: "$400",
            newItemRevenuePerMonthMar: "$300",
            newItemVariationInMar: "-7%",
          }
        ]
      }
    ];

    // Return the data as an Observable
    return of(data);
  }

  getProductionData() {
    return [
      {
        "Sponsor": this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Duke</a>"),
        "Protocol": "PD-001",
        "Cohort": "Standard",
        "Revenue": "$1000",
        "Margin": "15%"
      },
      {
        "Sponsor": this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Duke</a>"),
        "Protocol": "PD-002",
        "Cohort": "US",
        "Revenue": "$3000",
        "Margin": "10%"
      },
      {
        "Sponsor": this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Duke</a>"),
        "Protocol": "PD-003",
        "Cohort": "Japan",
        "Revenue": "$5000",
        "Margin": "18%"
      },
      {
        "Sponsor": this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Molecular</a>"),
        "Protocol": "PD-004",
        "Cohort": "Standard",
        "Revenue": "$5000",
        "Margin": "13%"
      },
      {
        "Sponsor": this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Molecular</a>"),
        "Protocol": "PD-005",
        "Cohort": "Asia",
        "Revenue": "$8000",
        "Margin": "5%"
      },
      {
        "Sponsor": this.sanitizer.bypassSecurityTrustHtml("<a href='#' style='color: rgba(18, 132, 116, 1); text-decoration: underline;'>Molecular</a>"),
        "Protocol": "PD-006",
        "Cohort": "Europe",
        "Revenue": "$400",
        "Margin": "-10%"
      }
    ];
  }

  getSponsorData() {
    return [
      {
        "Protocol": "DP-001",
        "Cohort": "Standard",
        "Visit": "V1",
        "KitName": "Hematology",
        "KitQty": "23",
        "PreLabel":"No",
        "KitComplexityLevel":"Low"
      },
      {
        "Protocol": "DP-001",
        "Cohort": "Standard",
        "Visit": "V2",
        "KitName": "Tissue",
        "KitQty": "64",
        "PreLabel":"Yes",
        "KitComplexityLevel":"High"
      },
      {
        "Protocol": "DP-001",
        "Cohort": "Standard",
        "Visit": "V8",
        "KitName": "Unscheduled",
        "KitQty": "74",
        "PreLabel":"Yes",
        "KitComplexityLevel":"Medium"
      },
      {
        "Protocol": "DP-002",
        "Cohort": "US",
        "Visit": "V5",
        "KitName": "Hematology",
        "KitQty": "48",
        "PreLabel":"No",
        "KitComplexityLevel":"Low"
      },
      {
        "Protocol": "DP-002",
        "Cohort": "US",
        "Visit": "V6",
        "KitName": "Hematology",
        "KitQty": "101",
        "PreLabel":"Yes",
        "KitComplexityLevel":"High"
      },
      {
        "Protocol": "DP-002",
        "Cohort": "US",
        "Visit": "V7",
        "KitName": "Tissue",
        "KitQty": "38",
        "PreLabel":"No",
        "KitComplexityLevel":"Medium"
      }
    ];
  }

}
