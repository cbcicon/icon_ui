import { Component, ViewChild, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Table } from 'primeng/table';
import { TableDataService } from '../../../../common/table-data/table-data.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-inv-config-item',
  templateUrl: './inv-config-item.html',
  styleUrls: ['./inv-config-item.scss'],
  providers: [MessageService]
})
export class InvConfigItemComponent implements OnInit {
  itemDataConfig: any[] = [];
  @ViewChild('dt') table!: Table;
  excelData: any[] = [];
  excelHeaders: string[] = [];
  rowsPerPageOptions: any;
  controlRow = 10;
  selectedValue: any;
  loading: boolean = false;
  totalRecords!: number;
  changeExpandButton = false;
  selectedSize: string = 'p-datatable-gridlines p-datatable-striped';
  addItemActive: boolean = false; // Track if the "Add Item" button was clicked
  newItemData: any = {}; // Store the new item data to be added
  editing: boolean = false; // Track if an item is being edited

  monthList = [
    { value: '1', name: '1 month' },
    { value: '2', name: '2 months' },
    { value: '3', name: '3 months' },
    { value: '4', name: '4 months' },
    { value: '5', name: '5 months' }
  ];

  constructor(public tableDataService: TableDataService, private messageService: MessageService) {}

  ngOnInit() {
    this.tableDataService.getAllItemConfigurationTbl().subscribe((res: any) => {
      this.itemDataConfig = res;
      this.totalRecords = res.length;
      this.rowsPerPageOptions = this.divideIntoMultiplesOfTen(this.totalRecords);
      this.loadItemConfigData();
    });
  }

  handleRowControl() {
    this.controlRow = this.controlRow == 10 ? 28 : 10;
    this.changeExpandButton = this.controlRow == 10 ? false : true;
  }

  divideIntoMultiplesOfTen(number: any) {
    const multiplesOfTen = [];
    let currentMultiple = 10;

    while (currentMultiple <= number) {
      multiplesOfTen.push(currentMultiple);
      currentMultiple += 10;
    }

    return multiplesOfTen;
  }

  // Method to handle file selection
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  const reader: FileReader = new FileReader();

  reader.onload = (e: any) => {
    const binaryString: string = e.target.result;
    const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });

    const sheetName: string = workbook.SheetNames[0];
    const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

    // Convert Excel data to JSON format
    const newExcelData: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });

    // Map Excel data to match table structure (if needed)
    const mappedExcelData: any[] = newExcelData.map((item: any) => ({
      itemNo: item['Item #'] || item['item'] || item['Item'] || item['item'],
      itemDescription: item['Description'] || item['description'],
      criticality: item['Criticality'] || item['criticality'],
      itemType: item['Item Type'] || item['item type'] || item['Item Type'] || item['item type'],
      weight: item['Weight'] || item['weight'],
      price: item['Price'],
      status: item['Status'],
      approvedCountry: item['Approved Countries'],
      replacement: item['Replacement'],
      minoq: item['Min Order Qty'],
      editing: false // Initialize editing flag for each item
    }));

    // Append new Excel data below after the existing itemDataConfig 
    // this.itemDataConfig = [...this.itemDataConfig, ...mappedExcelData];

     // Append new Excel data to existing itemDataConfig at the top
     this.itemDataConfig = [...mappedExcelData, ...this.itemDataConfig];

    // Fetch existing item configuration data if needed
    // this.loadItemConfigData();
  };

  reader.readAsBinaryString(file);
}

// Method to trigger file upload process
uploadExcel() {
  document.getElementById('fileInput')?.click();
}

  onSponsorChange(event: any) {
    let searchParam = event.value.value;
    console.log('test : ', searchParam);
  }

  addItem() {
    // Add a new empty item object to the itemDataConfig array
    this.newItemData = {
      itemNo: '',
      itemDescription: '',
      criticality: '',
      itemType: '',
      weight: '',
      price: '',
      status: '',
      approvedCountry: '',
      replacement: '',
      minoq: ''
    };
    this.itemDataConfig = [this.newItemData, ...this.itemDataConfig];
    this.addItemActive = true; // Set the flag to true indicating "Add Item" was clicked
  }

  onRowEditSave(item: any) {
    if (this.addItemActive) {
      // Save the new item data to the database
      this.tableDataService.addItem(item).subscribe({
        next: (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item added successfully' });
          this.addItemActive = false; // Reset the flag
          this.newItemData = {}; // Reset the newItemData
          this.loadItemConfigData(); // Refresh the table data
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add item' });
        }
      });
    } else {
      // Update the existing item data in the database
      this.tableDataService.updateItem(item).subscribe({
        next: (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item updated successfully' });
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update item' });
        }
      });
    }
    this.editing = false; // Exit editing mode
  }

  loadItemConfigData() {
    this.tableDataService.fetchItemConfigData().subscribe(
      (data) => {
        console.log('Item config data:', data);
        this.itemDataConfig = data;
      },
      (error) => {
        console.error('Error fetching item config data:', error);
      }
    );
  }

  onRowEditCancel(item: any, index: number) {
    if (this.addItemActive) {
      // If the "Add Item" button was clicked, remove the new empty row
      this.itemDataConfig.splice(index, 1);
      this.addItemActive = false; // Reset the flag
      this.newItemData = {}; // Reset the newItemData
    }
    this.editing = false; // Exit editing mode
  }

  startEditing(itemDataConfig: any): void {
    itemDataConfig.editing = true;
    this.editing = true;
  }

  cancelEdit(itemDataConfig: any, ri: number): void {
    itemDataConfig.editing = false; // Setting editing to false after canceling
    this.editing = false; // Cancel editing mode
  }

  saveChanges(itemDataConfig: any) {
    itemDataConfig.editing = false; // Setting editing to false after saving
    this.editing = false;
    // console.log('Saving changes:', itemDataConfig);
  }

  // Method to enable editing mode for a specific row
  editRow(item: any) {
    // Set the item as the one being edited
    this.editing = true;
  }
}
