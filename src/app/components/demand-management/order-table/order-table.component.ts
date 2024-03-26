import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  activity?: number;
  representative?: Representative;
}

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}


interface InventoryStatus {
  label: string;
  value: string;
}
export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  verified?:boolean;
  date?: string;
  status?: string;
  activity?: number;
  representative?: Representative;
  balance?:number
}

interface expandedRows {
  [key: string]: boolean;
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: InventoryStatus;
  category?: string;
  image?: string;
  rating?: number;
}


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.scss'
})

export class OrderTableComponent implements OnInit {


customers:any

totalRecords!: number;

loading: boolean = false;

representatives!: Representative[];

selectAll: boolean = false;

selectedCustomers!:any

rowsPerPageOptions:any

tableHeaderItem = [
  { columnName: 'ITEMID', sortableColumn: 'itemid' },
  { columnName: 'DESCRIPTION', sortableColumn: 'description' },
  { columnName: 'QUANTITY-ORDERED', sortableColumn: 'quantity-ordered' },
  { columnName: 'QUANTITY-RECEIVED', sortableColumn: 'quantity-received' },
  { columnName: 'CATEGORY', sortableColumn: 'category' },
  { columnName: 'ORDER-DATE', sortableColumn: 'order-date' },
  { columnName: 'DUE-DATE', sortableColumn: 'due-date' },
  { columnName: 'PO', sortableColumn: 'po' },
  { columnName: 'QUANTITY-OPEN', sortableColumn: 'quantity-open' },
  { columnName: 'VENDOR', sortableColumn: 'vendor' }
];

constructor(private customerService: DataService ) {}

ngOnInit() {
    this.loading = true;
    this.totalRecords = 180;
    setTimeout(() => {
    this.customers = this.customerService.getData()
    this.loading = false
  }, 1000);

  this.rowsPerPageOptions =  this.divideIntoMultiplesOfTen(this.totalRecords)

  }

  divideIntoMultiplesOfTen(number:any) {
    const multiplesOfTen = [];
    let currentMultiple = 10;

    while (currentMultiple <= number) {
        multiplesOfTen.push(currentMultiple);
        currentMultiple += 10;
    }

    return multiplesOfTen;
}

loadCustomers(event: TableLazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
        // this.customerService.getCustomers({ lazyEvent: JSON.stringify(event) }).then((res) => {
        //     this.customers = res;
        //     this.totalRecords = 100;
        //     this.loading = false;
        // });
        // this.customers = this.customerService.getData()
        // this.totalRecords = 180;
        // this.loading = false
    }, 1000);

    
}

onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedCustomers = value;
}

onSelectAllChange(event: any) {
    const checked = event.checked;

    if (checked) {
        this.selectedCustomers = this.customerService.getData();
        this.selectAll = true;

    } else {
        this.selectedCustomers = [];
        this.selectAll = false;
    }
}






}
