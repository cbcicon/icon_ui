import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShortenerService {

  constructor() { }

  shortenData(data: any[], interval: string): any[] {
    data = data.sort((a, b) => new Date(b.DUE_DATE).getTime() - new Date(a.DUE_DATE).getTime()); // Sort data by due date in descending order

    switch(interval) {
      case 'yearly':
        return this.shortenToYearly(data);
      case 'half-yearly':
        return this.shortenToHalfYearly(data);
      case 'quarterly':
        return this.shortenToQuarterly(data);
      case 'monthly':
        return this.shortenToMonthly(data);
      case 'weekly':
        return this.shortenToWeekly(data);
      default:
        console.error('Invalid interval provided');
        return data;
    }
  }

  private shortenToYearly(data: any[]): any[] {
    const latestDate = new Date(data[0].DUE_DATE);
    const latestYear = latestDate.getFullYear();
    const groupedData = data.reduce((acc, currentValue) => {
      const year = new Date(currentValue.DUE_DATE).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(currentValue);
      return acc;
    }, {});
    return groupedData[latestYear] ? [groupedData[latestYear]] : [];
  }

  private shortenToHalfYearly(data: any[]): any[] {
    const latestDate = new Date(data[0].DUE_DATE);
    const latestMonth = latestDate.getMonth();
    const firstHalfStartMonth = latestMonth < 6 ? 0 : 6;
    const firstHalfEndMonth = latestMonth < 6 ? 5 : 11;
    const firstHalf = data.filter(item => {
      const month = new Date(item.DUE_DATE).getMonth();
      return month >= firstHalfStartMonth && month <= firstHalfEndMonth;
    });
    return [firstHalf];
  }

  private shortenToQuarterly(data: any[]): any[] {
    const latestDate = new Date(data[0].DUE_DATE);
    const latestMonth = latestDate.getMonth();
    const quarterStartMonths = [0, 3, 6, 9]; 
    const latestQuarterIndex = quarterStartMonths.findIndex(startMonth => startMonth <= latestMonth);
    const latestQuarterStartMonth = quarterStartMonths[latestQuarterIndex];
    const latestQuarterEndMonth = latestQuarterStartMonth + 2;
    const latestQuarter = data.filter(item => {
      const month = new Date(item.DUE_DATE).getMonth();
      return month >= latestQuarterStartMonth && month <= latestQuarterEndMonth;
    });
    return [latestQuarter];
  }

  private shortenToMonthly(data: any[]): any[] {
    const latestDate = new Date(data[0].DUE_DATE);
    const latestMonth = latestDate.getMonth();
    const latestYear = latestDate.getFullYear();
    const groupedData = data.reduce((acc, currentValue) => {
      const year = new Date(currentValue.DUE_DATE).getFullYear();
      const month = new Date(currentValue.DUE_DATE).getMonth();
      if (year === latestYear && month === latestMonth) {
        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(currentValue);
      }
      return acc;
    }, {});
    return Object.values(groupedData);
  }

  private shortenToWeekly(data: any[]): any[] {
    const latestDate = new Date(data[0].DUE_DATE);
    const latestMonth = latestDate.getMonth();
    const latestYear = latestDate.getFullYear();
    const startOfWeek = new Date(latestYear, latestMonth, 1).getDay(); 
    const weeks = [[], [], [], [], [], []]; 
    data.forEach((item:any) => {
      const date = new Date(item.DUE_DATE);
      if (date.getFullYear() === latestYear && date.getMonth() === latestMonth) {
        const weekIndex = Math.floor((date.getDate() + startOfWeek - 1) / 7);
       // weeks[weekIndex].push(item);
      }
    });
    return weeks;
  }
}
