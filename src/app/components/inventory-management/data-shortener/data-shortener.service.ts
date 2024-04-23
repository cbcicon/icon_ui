import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShortenerService {

  constructor() { }

  filterWeekly(data: any[]): any[] {
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= oneWeekAgo && new Date(item.DUE_DATE) <= currentDate);
  }

  filterMonthly(data: any[]): any[] {
    const currentDate = new Date();
    const oneMonthAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= oneMonthAgo && new Date(item.DUE_DATE) <= currentDate);
  }

  filterHalfYearly(data: any[]): any[] {
    const currentDate = new Date();
    const sixMonthsAgo = new Date(currentDate.getTime() - 180 * 24 * 60 * 60 * 1000);
    return data.filter(item => new Date(item.DUE_DATE) >= sixMonthsAgo && new Date(item.DUE_DATE) <= currentDate);
  }
}
