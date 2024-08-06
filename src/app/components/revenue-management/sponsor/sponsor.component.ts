import { Component } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { UtilService} from '../../../common/util';

@Component({
    selector: 'app-sponsor',
    templateUrl: './sponsor.component.html',
    styleUrls: ['./sponsor.component.scss']
  })
export class SponsorComponent {


  constructor(private util: UtilService,private dataService: DataService ) {}

  sponsors :any;
  changeExpandButton = false;
  pageSize: any;
  setRows: any;
  tableViewOption: boolean = false;
  showInfoCard: boolean = false;
  loading: boolean = true

 ngOnInit(){
  this.sponsors = this.dataService.getSponsorData();
   setTimeout(() => {
     this.loading =  false
   },1000)
 }

 handleRowControl() {
    this.setRows = this.setRows == this.util.getPageSize() ? this.sponsors.length : this.util.getPageSize();
    this.changeExpandButton = this.setRows == this.util.getPageSize() ? false : true;
  }

  handleTableView() {
    this.tableViewOption = !this.tableViewOption
  }

  showContent: boolean = true;
  toggleContent() {
    this.showContent = !this.showContent;
  }

  handleInfoCard() {
    this.showInfoCard = !this.showInfoCard
  }
}
