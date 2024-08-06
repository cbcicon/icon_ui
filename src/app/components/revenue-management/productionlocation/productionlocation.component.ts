import { Component } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { UtilService} from '../../../common/util';

@Component({
    selector: 'app-productionlocation',
    templateUrl: './productionlocation.component.html',
    styleUrls: ['./productionlocation.component.scss']
  })
export class ProductionLocationComponent {


  constructor(private util: UtilService,private dataService: DataService ) {}

  productionlocations :any;
  changeExpandButton = false;
  pageSize: any;
  setRows: any;
  tableViewOption: boolean = false;
  showInfoCard: boolean = false;
  loading: boolean = true

 ngOnInit(){
  this.productionlocations = this.dataService.getProductionLocationData();
   setTimeout(() => {
     this.loading =  false
   },1000)
 }

 handleRowControl() {
    this.setRows = this.setRows == this.util.getPageSize() ? this.productionlocations.length : this.util.getPageSize();
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
