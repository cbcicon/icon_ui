import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { DataService } from '../data-services/data.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Sidebar } from 'primeng/sidebar';
import * as FileSaver from 'file-saver';
import { UtilService} from '../../../common/util';

@Component({
  selector: 'app-newstudy-table',
  templateUrl: './newstudy-table.component.html',
  styleUrls: ['./newstudy-table.component.scss']
})
export class NewstudyTableComponent implements OnInit {
  studies: any[] = []; 
  studyData: any;
  editing: boolean = false;
  editingRow: any = null;
  selectedStudies!: any;
  loading: boolean = false;
  selectAll: boolean = false;
  showStudyDetailPage: boolean = false;
  tableViewOption: boolean = false;
  viewAdditionColumn = false;
  pageSize: any;
  setRows: any;
  
  additionalColList = [
    { name: 'PM Name', field: 'pmName' },
    { name: 'PM Team', field: 'pmTeam' },
    { name: 'Setup Specialist Name', field: 'setupSpecialistName' },
    { name: 'GSC/Inventory Review', field: 'gscInventoryReview' },
    { name: 'CLW Version #', field: 'clwVersion' },
    { name: 'CSTR Version #', field: 'cstrVersion' }
  ];
  // showDetailContent = false;
  showNewStudyDetailContent = false;
  showLiveStudyDetailContent = false;
  chatRightSideBar = false;
  changeExpandButton = false;

  tableView: any;

  rowsPerPageOptions: any[] = Array.from({ length: 9 }, (_, i) => (i + 1) * 10);

  showItemDetailPage: boolean = false

  ref: DynamicDialogRef | undefined;

  data: any;

  options: any;
  
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  itemData: any = [];
  @Input() allComments:any;
  @Input() unreadCommentLength:any;
  alertRightSideBar = true;
  changcontrolRoweExpandButton = false;
  showInfoCard: boolean = false;
  commentText: string = '';
  
  constructor(private util: UtilService,private newstudyService: DataService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.studies = [
        {
            "sponsor": "2SeventyBio",
            "protocol_id": "CRC-403",
            "study_type":"Live",
            "countries": 5,
            "sites": 5,
            "sites_remaining": 3,
            "subjects_screened": 50,
            "qty_of_kits_study": 650,
            "qty_of_kits_initial": 120,
            "visits": 13,
            "pre_label_y": "Yes",
            "production_location":"-",
            "date_kos": "15 Apr2024",
            "revenue_gen": "$2,348"
        },
        {
            "sponsor": "4DMolecularTherapeu",
            "protocol_id": "1517-CL-0101",
            "study_type":"New",
            "countries": 10,
            "sites": 10,
            "sites_remaining": 5,
            "subjects_screened": 90,
            "qty_of_kits_study": 540,
            "qty_of_kits_initial": 160,
            "visits": 14,
            "pre_label_y": "No",
            "production_location":"-",
            "date_kos": "04Apr2024",
            "revenue_gen": "$2,348"
        },
        {
          "sponsor": "4SC AG",
          "protocol_id": "18331A",
          "study_type":"New",
          "countries": 3,
          "sites": 3,
          "sites_remaining": 1,
          "subjects_screened": 20,
          "qty_of_kits_study": 700,
          "qty_of_kits_initial": 130,
          "visits": 20,
          "pre_label_y": "No",
          "production_location": "-",
          "date_kos": "30Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbbottBiologicalsB.V.",
          "protocol_id": "19-2360",
          "study_type":"Live",
          "countries": 2,
          "sites": 2,
          "sites_remaining": 1,
          "subjects_screened": 25,
          "qty_of_kits_study": 400,
          "qty_of_kits_initial": 100,
          "visits": 12,
          "pre_label_y": "Yes",
          "production_location": "-",
          "date_kos": "25 Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbbottDiabetesCare",
          "protocol_id": "20060342EU",
          "study_type":"Live",
          "countries": 5,
          "sites": 5,
          "sites_remaining": 4,
          "subjects_screened": 10,
          "qty_of_kits_study": 969,
          "qty_of_kits_initial": 324,
          "visits": 15,
          "pre_label_y": "Yes",
          "production_location": "-",
          "date_kos": "19Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbbVie",
          "protocol_id": "20060342US",
          "study_type":"Live",
          "countries": 18,
          "sites": 18,
          "sites_remaining": 8,
          "subjects_screened": 19,
          "qty_of_kits_study": 1717,
          "qty_of_kits_initial": 500,
          "visits": 25,
          "pre_label_y": "Yes",
          "production_location": "-",
          "date_kos": "13 Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AbGenomicsInternatio...",
          "protocol_id": "20150164",
          "study_type":"New",
          "countries": 4,
          "sites": 4,
          "sites_remaining": 2,
          "subjects_screened": 30,
          "qty_of_kits_study": 200,
          "qty_of_kits_initial": 50,
          "visits": 18,
          "pre_label_y": "No",
          "production_location": "-",
          "date_kos": "02Mar2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "Acepodia Biotech",
          "protocol_id": "2138-CL-0101",
          "study_type":"New",
          "countries": 8,
          "sites": 8,
          "sites_remaining": 4,
          "subjects_screened": 70,
          "qty_of_kits_study": 350,
          "qty_of_kits_initial": 180,
          "visits": 16,
          "pre_label_y": "No",
          "production_location": "-",
          "date_kos": "28Feb2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "AdicetBio,Inc.",
          "protocol_id": "2215-CL-0203",
          "study_type":"New",
          "countries": 6,
          "sites": 6,
          "sites_remaining": 3,
          "subjects_screened": 60,
          "qty_of_kits_study": 2000,
          "qty_of_kits_initial": 850,
          "visits": 10,
          "pre_label_y": "Yes",
          "production_location": "-",
          "date_kos": "19Feb 2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "Agios Pharmaceuticals....",
          "protocol_id": "2802-CL-0603",
          "study_type":"Live",
          "countries": 4,
          "sites": 4,
          "sites_remaining": 1,
          "subjects_screened": 80,
          "qty_of_kits_study": 1600,
          "qty_of_kits_initial": 560,
          "visits": 5,
          "pre_label_y": "No",
          "production_location": "-",
          "date_kos": "14Feb 2024",
          "revenue_gen": "$2,348"
        },
        {
          "sponsor": "Albireo",
          "protocol_id": "3082-CL-0101",
          "study_type":"Live",
          "countries": 7,
          "sites": 7,
          "sites_remaining": 4,
          "subjects_screened": 50,
          "qty_of_kits_study": 1540,
          "qty_of_kits_initial": 350,
          "visits": 15,
          "pre_label_y": "Yes",
          "production_location": "-",
          "date_kos": "09Feb2024",
          "revenue_gen": "$2,348"
        }
    ];

    this.studies.forEach(study => {
      study.editing = false;
    });

    this.setRows = this.util.getPageSize(); // Initializing with the default page size
     //this.changeExpandButton = false; // Initializing with the collapsed state
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

onSelectAllChange(event: any) {
  this.selectedItems = event.checked ? this.additionalColList : [];
  this.selectAll = event.checked;
}

isIconVisible(study: any, type: string): boolean {
  const index = this.studies.indexOf(study);
  if (type === 'warning') {
    return (index < 5 || index === this.studies.length - 1) ;
  } else if (type === 'success') {
    return index >= 5 && index < 10;
  }
  return false;
}


selectedItems!: any[];
  onSelectionChange(event: any) {
  }

  handleRowControl() {
    this.setRows = this.setRows == this.util.getPageSize() ? this.studies.length : this.util.getPageSize();
    this.changeExpandButton = this.setRows == this.util.getPageSize() ? false : true;
  }


  closeCallback(e: any): void {
    this.sidebarRef.close(e);
    // this.chatRightSideBar = false;
  }

  selectedSize: string = 'p-datatable-gridlines p-datatable-striped'

  handleAdditionanlColumn() {
    this.viewAdditionColumn = !this.viewAdditionColumn
  }

onEditRow(study: any): void {
  // this.editingRow = { ...study };
  study.editing = true; // Setting editing to true for the selected study
  this.editing = true;
}

onSaveRow(study: any): void {
  // Saving the changes to the study object
  // this.editingRow = null;
  study.editing = false; // Setting editing to false after saving
  this.editing = false;
}

onCancelRow(study: any, ri: number): void {
  // if (this.editingRow) { // if there's an active edit
  //   Object.assign(study, this.editingRow); // Restoring original values
  // }
  // this.editingRow = null;
  study.editing = false; // Setting editing to false after canceling
  this.editing = false;
}

showContent: boolean = true;
  toggleContent() {
    this.showContent = !this.showContent;
  }

  handleInfoCard() {
    this.showInfoCard = !this.showInfoCard
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
  
// hanldeBelowContent() {
//   this.showDetailContent = !this.showDetailContent
// }

//Method to handle content display based on study type
// handleBelowContent(studyType: string) {
//   if (studyType === 'New') {
//     this.showDetailContent = true;
//   } else {
//     this.showDetailContent = false;
//   }
// }

// Method to handle content display based on study type
handleBelowContent(studyType: string) {
  if (studyType === 'New') {
    this.showNewStudyDetailContent = true;
    this.showLiveStudyDetailContent = false;
  } else if (studyType === 'Live') {
    this.showNewStudyDetailContent = false;
    this.showLiveStudyDetailContent = true;
  } else {
    this.showNewStudyDetailContent = false;
    this.showLiveStudyDetailContent = false;
  }
}

handleChatRightSidebar(study:any) {
  this.chatRightSideBar = !this.chatRightSideBar
  this.studyData = study;
}

postComment(){


  const existingComments = JSON.parse(localStorage.getItem('comments') || '[]');

  existingComments.push({  commentText :this.commentText ,read: false });

  localStorage.setItem('comments', JSON.stringify(existingComments));

}
}