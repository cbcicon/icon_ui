import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShortenerService {

  constructor() { }


  filterWeekly(data: any[]): any[] {
    const currentDate = new Date();
    const oneWeekForward = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.earlyExpiryDate) >= currentDate && new Date(item.earlyExpiryDate) <= oneWeekForward);
  }

  filterMonthly(data: any[]): any[] {
    const currentDate = new Date();
    const oneMonthForward = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.earlyExpiryDate) >= currentDate && new Date(item.earlyExpiryDate) <= oneMonthForward);
  }

  filterQuarterly(data: any[]): any[] {
    const currentDate = new Date();
    const ninetyDaysForward = new Date(currentDate.getTime() + 90 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.earlyExpiryDate) >= currentDate && new Date(item.earlyExpiryDate) <= ninetyDaysForward);
  }


  filterHalfYearly(data: any[]): any[] {
    const currentDate = new Date();
    const sixMonthsForward = new Date(currentDate.getTime() + 180 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.earlyExpiryDate) >= currentDate && new Date(item.earlyExpiryDate) <= sixMonthsForward);
  }

  filterYearly(data: any[]): any[] {
    const currentDate = new Date();
    const oneYearForward = new Date(currentDate.getTime() + 360 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.earlyExpiryDate) >= currentDate && new Date(item.earlyExpiryDate) <= oneYearForward);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return `${day} ${monthNames[monthIndex]} ${year}`;
  }
  
}
