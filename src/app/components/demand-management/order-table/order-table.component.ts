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

constructor(private customerService: DataService) {}

ngOnInit() {
  
    this.loading = true;
}

loadCustomers(event: TableLazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
        // this.customerService.getCustomers({ lazyEvent: JSON.stringify(event) }).then((res) => {
        //     this.customers = res;
        //     this.totalRecords = 100;
        //     this.loading = false;
        // });
        this.customers = this.customerService.getData()
        this.totalRecords = 180;
        this.loading = false
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
