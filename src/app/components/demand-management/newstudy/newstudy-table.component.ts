import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Sidebar } from 'primeng/sidebar';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-newstudy-table',
  templateUrl: './newstudy-table.component.html',
  styleUrls: ['./newstudy-table.component.scss']
})
export class NewstudyTableComponent implements OnInit {
  studies: any[] = []; 
  editingRow: any = null;
  selectedStudies: any[] = [];
  loading: boolean = false;
  showStudyDetailPage: boolean = false;
  selectedSize: string = 'table-responsive';
  tableViewOption: boolean = false;
  viewAdditionColumn = false;
  showDetailContent = false;
  chatRightSideBar = false;

  tableView: any;

  rowsPerPageOptions: any[] = Array.from({ length: 9 }, (_, i) => (i + 1) * 10);

  showItemDetailPage: boolean = false

  ref: DynamicDialogRef | undefined;

  data: any;

  options: any;
  
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  itemData: any = [];

  setRows: number = 10;
  

  constructor(private newstudyService: DataService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.studies = [
        {
            "sponsor": "2SeventyBio",
            "protocol_id": "CRC-403",
            "countries": 5,
            "sites": 5,
            "sites_completed": 3,
            "subjects_screened": 50,
            "qty_of_kits_study": 650,
            "qty_of_kits_initial": 120,
            "visits": 13,
            "pre_label_y": "Yes",
            "kit_vendor": "",
            "date_kit_at_first_site": "15 Apr2024",
            "revenue_gen": "$2,348"
        },
        {
            "sponsor": "4DMolecularTherapeu",
            "protocol_id": "1517-CL-0101",
            "countries": 10,
            "sites": 10,
            "sites_completed": 5,
            "subjects_screened": 90,
            "qty_of_kits_study": 540,
            "qty_of_kits_initial": 160,
            "visits": 14,
            "pre_label_y": "No",
            "kit_vendor": "",
            "date_kit_at_first_site": "04Apr2024",
            "revenue_gen": "$2,348"
        },
        {
          "sponsor": "4SC AG",
          "protocol_id": "18331A",
          "countries": 3,
          "sites": 3,
          "sites_completed": 1,
          "subjects_screened": 20,
          "qty_of_kits_study": 700,
          "qty_of_kits_initial": 130,
          "visits": 20,
          "pre_label_y": "No",
          "kit_vendor": "",
          "date_kit_at_first_site": "30Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbbottBiologicalsB.V.",
          "protocol_id": "19-2360",
          "countries": 2,
          "sites": 2,
          "sites_completed": 1,
          "subjects_screened": 25,
          "qty_of_kits_study": 400,
          "qty_of_kits_initial": 100,
          "visits": 12,
          "pre_label_y": "Yes",
          "kit_vendor": "",
          "date_kit_at_first_site": "25 Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbbottDiabetesCare",
          "protocol_id": "20060342EU",
          "countries": 5,
          "sites": 5,
          "sites_completed": 4,
          "subjects_screened": 10,
          "qty_of_kits_study": 969,
          "qty_of_kits_initial": 324,
          "visits": 15,
          "pre_label_y": "Yes",
          "kit_vendor": "",
          "date_kit_at_first_site": "19Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbbVie",
          "protocol_id": "20060342US",
          "countries": 18,
          "sites": 18,
          "sites_completed": 8,
          "subjects_screened": 19,
          "qty_of_kits_study": 1717,
          "qty_of_kits_initial": 500,
          "visits": 25,
          "pre_label_y": "Yes",
          "kit_vendor": "",
          "date_kit_at_first_site": "13 Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbGenomicsInternatio...",
          "protocol_id": "20150164",
          "countries": 4,
          "sites": 4,
          "sites_completed": 2,
          "subjects_screened": 30,
          "qty_of_kits_study": 200,
          "qty_of_kits_initial": 50,
          "visits": 18,
          "pre_label_y": "No",
          "kit_vendor": "",
          "date_kit_at_first_site": "02Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "Acepodia Biotech",
          "protocol_id": "2138-CL-0101",
          "countries": 8,
          "sites": 8,
          "sites_completed": 4,
          "subjects_screened": 70,
          "qty_of_kits_study": 350,
          "qty_of_kits_initial": 180,
          "visits": 16,
          "pre_label_y": "No",
          "kit_vendor": "",
          "date_kit_at_first_site": "28Feb2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AdicetBio,Inc.",
          "protocol_id": "2215-CL-0203",
          "countries": 6,
          "sites": 6,
          "sites_completed": 3,
          "subjects_screened": 60,
          "qty_of_kits_study": 2000,
          "qty_of_kits_initial": 850,
          "visits": 10,
          "pre_label_y": "Yes",
          "kit_vendor": "",
          "date_kit_at_first_site": "19Feb 2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "Agios Pharmaceuticals....",
          "protocol_id": "2802-CL-0603",
          "countries": 4,
          "sites": 4,
          "sites_completed": 1,
          "subjects_screened": 80,
          "qty_of_kits_study": 1600,
          "qty_of_kits_initial": 560,
          "visits": 5,
          "pre_label_y": "No",
          "kit_vendor": "",
          "date_kit_at_first_site": "14Feb 2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "Albireo",
          "protocol_id": "3082-CL-0101",
          "countries": 7,
          "sites": 7,
          "sites_completed": 4,
          "subjects_screened": 50,
          "qty_of_kits_study": 1540,
          "qty_of_kits_initial": 350,
          "visits": 15,
          "pre_label_y": "Yes",
          "kit_vendor": "",
          "date_kit_at_first_site": "09Feb2024",
          "revenue_gen": "$2,348"
        }
    ];

    this.studies.forEach(study => {
      study.editing = false;
    });
}

// loadStudiesLazy(event: TableLazyLoadEvent) {
//   this.loading = true;

//   // Simulate a delay to show loading indicator
//   setTimeout(() => {
//     const start = event.first ?? 0;
//     const pageSize = event.rows ?? 10;

//     // Calculate the end index based on the start index and page size
//     const end = start + pageSize;

//     // Fetch data for the current page
//     this.studies = this.studies.slice(start, end);
//     this.loading = false;
//   }, 1000); // Simulating a delay of 1 second
// }

onEditRow(study: any): void {
  this.editingRow = { ...study };
  study.editing = true; // Setting editing to true for the selected study
}

onSaveRow(study: any): void {
  // Saving the changes to the study object
  this.editingRow = null;
  study.editing = false; // Setting editing to false after saving
}

onCancelRow(study: any, ri: number): void {
  if (this.editingRow) { // if there's an active edit
    Object.assign(study, this.editingRow); // Restoring original values
  }
  this.editingRow = null;
  study.editing = false; // Setting editing to false after canceling
}

exportExcel() {
  import('xlsx').then((xlsx) => {
    const worksheet = xlsx.utils.json_to_sheet(this.studies);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'products');
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

handleTableView() {
  this.tableViewOption = !this.tableViewOption
}

handleAdditionanlColumn() {
  this.viewAdditionColumn = !this.viewAdditionColumn
}
  
hanldeBelowContent() {
  this.showDetailContent = !this.showDetailContent
}

handleChatRightSidebar() {
  this.chatRightSideBar = !this.chatRightSideBar
}
}