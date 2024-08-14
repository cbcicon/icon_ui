import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page-tables',
  templateUrl: './search-page-tables.component.html',
  styleUrls:['./search-page-tables.component.scss']
})
export class SearchPageTablesComponent {

  searchQuery: string | null = null;
  activeTableHeader: any[] = [];
  activeTableData: any[] = [];

  loading = false;

  tableHeaders: { [key: string]: { id: number, label: string }[] } = {
    workOrder:[
      { "id": 1, "label": "Actions" },
      { "id": 2, "label": "Work Order #" },
      { "id": 3, "label": "Production Order" },
      { "id": 4, "label": "Order Type" },
      { "id": 5, "label": "Site #" },
      { "id": 6, "label": "# of Kits" },
      { "id": 7, "label": "Recipient" },
      { "id": 8, "label": "Status" },
      { "id": 9, "label": "Days Created" },
      { "id": 10, "label": "Multi-label" },
      { "id": 11, "label": "Created Date" },
      { "id": 12, "label": "Due Date" },
      { "id": 13, "label": "Est. Shipping" },
      { "id": 14, "label": "Assigned To" },
      { "id": 15, "label": "PM Approval" }
    ] ,

  protocol:[
    { "id": 1, "label": "Actions" },
    { "id": 2, "label": "Protocol ID #" },
    { "id": 3, "label": "Sponsor" },
    { "id": 4, "label": "Study Type" },
    { "id": 5, "label": "Countries" },
    { "id": 6, "label": "# Sites" },
    { "id": 7, "label": "# Sites Remaining" },
    { "id": 8, "label": "# Subjects Screened" },
    { "id": 9, "label": "Qty of Kits (Study)" },
    { "id": 10, "label": "Qty of Kits (Initial)" },
    { "id": 11, "label": "# Visits" },
    { "id": 12, "label": "Pre-Label" },
    { "id": 13, "label": "Production Location" },
    { "id": 14, "label": "Dato KOS" },
    { "id": 15, "label": "Revenue" }
   ] ,

  sponsor:[
  { "id": 1, "label": "Actions" },
  { "id": 2, "label": "Sponsor" },
  { "id": 3, "label": "Protocol ID" },
  { "id": 4, "label": "Study Type" },
  { "id": 5, "label": "# Countries" },
  { "id": 6, "label": "# Sites" },
  { "id": 7, "label": "# Sites Remaining" },
  { "id": 8, "label": "Subjects Screened" },
  { "id": 9, "label": "Qty of Kits (Study)" },
  { "id": 10, "label": "Qty of Kits (Initial)" },
  { "id": 11, "label": "# Visits" },
  { "id": 12, "label": "Pre-Label" },
  { "id": 13, "label": "Production Location" },
  { "id": 14, "label": "Dato KOS" },
  { "id": 15, "label": "Revenue" }
   ] ,
  kit:[
  { "id": 1, "label": "Actions" },
  { "id": 2, "label": "Kit Name" },
  { "id": 3, "label": "Kit Qty" },
  { "id": 4, "label": "Kit Category" },
  { "id": 5, "label": "# Item Components" },
  { "id": 6, "label": "Pre Label" },
  { "id": 7, "label": "Complexity" },
  { "id": 8, "label": "Special Instructions" }
  ]
  ,
  item:[
    { "id": 1, "label": "Actions" },
    { "id": 2, "label": "Item#" },
    { "id": 3, "label": "Item Description" },
    { "id": 4, "label": "Demand" },
    { "id": 5, "label": "On Stock" },
    { "id": 6, "label": "Availability" },
    { "id": 7, "label": "Order Date" },
    { "id": 8, "label": "Due Date" },
    { "id": 9, "label": "Early Expiry Date" }
  ] ,
  vendor:[
    { "id": 1, "label": "Actions" },
    { "id": 2, "label": "Vendor" },
    { "id": 3, "label": "Po#" },
    { "id": 4, "label": "Status" },
    { "id": 5, "label": "Location" },
    { "id": 6, "label": "Sponsor" },
    { "id": 7, "label": "Protocol" },
    { "id": 8, "label": "Order UOM" },
    { "id": 9, "label": "Qty Order" },
    { "id": 10, "label": "Qty Received" },
    { "id": 11, "label": "Qty Open" },
    { "id": 12, "label": "Amount" },
    { "id": 13, "label": "Created Date" },
    { "id": 14, "label": "Expected Date" }
 ],
 visit:[
  { "id": 1, "label": "Actions" },
  { "id": 2, "label": "Visit Name" },
  { "id": 3, "label": "Visit Type" },
  { "id": 4, "label": "Visit Category" },
  { "id": 5, "label": "Visit Interval" },
  { "id": 6, "label": "Multi Visit" },
  { "id": 7, "label": "# Kits" },
  { "id": 8, "label": "Scheduled Date" }
 ],
 country:[
  { "id": 1, "label": "Actions" },
  { "id": 2, "label": "Country" },
  { "id": 3, "label": "Sponsor" },
  { "id": 4, "label": "# Sites" },
  { "id": 5, "label": "# Kit Supplied" },
  { "id": 6, "label": "# Kit Pending" },
  { "id": 7, "label": "Date KOS" },
  { "id": 8, "label": "FPFV" },
  { "id": 9, "label": "Progress" }
 ]
 
 }  
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      if( this.searchQuery){
        this.activeTableHeader = this.tableHeaders[this.searchQuery]
      }
    })
  }


}
