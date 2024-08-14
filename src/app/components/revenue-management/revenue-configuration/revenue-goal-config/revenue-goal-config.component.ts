import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-revenue-goal-config',
  templateUrl: './revenue-goal-config.component.html',
  styleUrls:[ './revenue-goal-config.component.scss']
})
export class RevenueGoalConfigComponent implements OnInit {
  
  farmingdaleData:any;
  midlandData:any;
  bufordData:any;
  loading: boolean = true;
  iconStateFarmingdale: boolean = false; // Array to track the icon state for each row
  iconStateMidland: boolean = false; // Array to track the icon state for each row
  iconStateBuford: boolean = false; // Array to track the icon state for each row

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.farmingdaleData = this.dataService.getFarmingdaleData();
    this.midlandData = this.dataService.getMidlandData();
    this.bufordData=this.dataService.getBufordData();
    // this.iconStateFarmingdale = new Array(this.farmingdaleData.length).fill(false); // Initializing the icon state array
    // this.iconStateMidland=new Array(this.midlandData.length).fill(false);// Initializing the icon state array
    // this.iconStateBuford=new Array(this.bufordData.length).fill(false);// Initializing the icon state array
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  // handleRevenueGoalConfigFarmingdale(index: number) {
  //   this.iconStateFarmingdale[index] = !this.iconStateFarmingdale[index]; // Toggling the icon state for the clicked row
  // }

  // handleRevenueGoalConfigMidland(index: number) {
  //   this.iconStateMidland[index] = !this.iconStateMidland[index]; // Toggling the icon state for the clicked row
  // }

  // handleRevenueGoalConfigBuford(index: number) {
  //   this.iconStateBuford[index] = !this.iconStateBuford[index]; // Toggling the icon state for the clicked row
  // }

  toggleIcon(section: string) {
    switch(section) {
      case 'farmingdale':
        this.iconStateFarmingdale = !this.iconStateFarmingdale;
        break;
      case 'midland':
        this.iconStateMidland = !this.iconStateMidland;
        break;
      case 'buford':
        this.iconStateBuford = !this.iconStateBuford;
        break;
    }
  }
}
