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

  getRingFenceData(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/${inventory.inventory['ring-fence-table-data']}`)
  }
   
  getStockScrapTableData(): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/${inventory.inventory['stockAndScrapData']}`)
  }

  getReplacementTableData(): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/${inventory.inventory['replacementTablesData']}`)
  }
  getReplacementActionData(): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/${inventory.inventory['replacementActionData']}`)
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    throw error;
  }

}
