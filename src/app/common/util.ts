import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }

  //Its for all grids
  getPageSize(): number {
    return 10;
  }
  getRowsPerPage(): any[] {
    return [10, 25, 50, 75, 100, 500, 1000];
  }

  //Genreate months for the given period
  //pass start and end date to generate months
  //Start Date is mandatory and (End date or No Of months), No of Months is precedence
  generateMonthlyData(start_date: string, end_date: string, no_of_months: number) {
    const startDate = moment(start_date);
    var endDate = moment(end_date);
    if (no_of_months > 0) {
      endDate = moment(startDate).add(no_of_months - 1, 'month');
    }
    const months = [];
    var index = 0;
    // Generate months between start and end date
    while (startDate.isBefore(endDate) || startDate.isSame(endDate, 'month')) {
      index++;
      let dateObj = { field: startDate.format('MMMYY'), name: startDate.format('MMM-YY'), value: index }
      months.push(dateObj);
      startDate.add(1, 'month');
    }
    return months;
  }



  // Y M H Q date filter function 


  filterWeekly(data: any[]): any[] {
    const currentDate = new Date();
    const oneWeekForward = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= currentDate && new Date(item.DUE_DATE) <= oneWeekForward);
  }

  filterMonthly(data: any[]): any[] {
    const currentDate = new Date();
    const oneMonthForward = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= currentDate && new Date(item.DUE_DATE) <= oneMonthForward);
  }

  filterQuarterly(data: any[]): any[] {
    const currentDate = new Date();
    const ninetyDaysForward = new Date(currentDate.getTime() + 90 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= currentDate && new Date(item.DUE_DATE) <= ninetyDaysForward);
  }


  filterHalfYearly(data: any[]): any[] {
    const currentDate = new Date();
    const sixMonthsForward = new Date(currentDate.getTime() + 180 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= currentDate && new Date(item.DUE_DATE) <= sixMonthsForward);
  }

  filterYearly(data: any[]): any[] {
    const currentDate = new Date();
    const oneYearForward = new Date(currentDate.getTime() + 360 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= currentDate && new Date(item.DUE_DATE) <= oneYearForward);
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