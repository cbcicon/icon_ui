import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import inventory from '../../restApi/end-url.json'

@Injectable()
export class TableDataService {
  constructor( private http: HttpClient) {}

  apiBaseUrl = environment.baseUrl
  
  getInventoryTableData(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/${inventory.inventory['inventory-table-data']}`)
  }
  
  getPurchaseOrderTableData(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/${inventory.inventory['purchase-order-table-data']}`)
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    throw error;
  }

}
