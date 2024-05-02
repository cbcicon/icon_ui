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
}