import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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
            productionlocation: "<a href='#' style='color: rgba(18, 132, 116, 1)'>FarmingDale</a>",
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
            productionlocation: "<a href='#' style='color: rgba(18, 132, 116, 1)'>Buford</a>",
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
            productionlocation: "<a href='#' style='color: rgba(18, 132, 116, 1)'>Therepak</a>",
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
            productionlocation: "<a href='#' style='color: rgba(18, 132, 116, 1)'>Midland</a>",
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
}
