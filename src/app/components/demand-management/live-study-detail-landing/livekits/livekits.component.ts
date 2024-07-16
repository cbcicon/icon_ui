import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';

@Component({
  selector: 'app-livekits',
  templateUrl: './livekits.component.html',
  styleUrls: ['./livekits.component.scss']
})
export class LiveKitsComponent implements OnInit {

  kits: any;
  advancedKits: any;
  loading: boolean = true;
  iconState: boolean[] = []; // Array to track the icon state for each row

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.kits = this.dataService.getLiveKits();
    this.advancedKits = this.dataService.getLiveAdvancedKits();
    this.iconState = new Array(this.kits.length).fill(false); // Initializing the icon state array
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  isHidden(index: number): boolean {
    return index === 2 || index === 4; 
  }

  handleKits(index: number) {
    this.iconState[index] = !this.iconState[index]; // Toggling the icon state for the clicked row
  }
}
