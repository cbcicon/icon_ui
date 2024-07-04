import { Component } from '@angular/core';

@Component({
  selector: 'app-live-study-detail-landing',
  templateUrl: './live-study-detail-landing.component.html',
  styleUrls:['./live-study-detail-landing.component.scss']
})
export class LiveStudyDetailLandingComponent {


  studies: any;

  activeComponent = "countries" ;
    
  ngOnInit() {
    this.studies = [
          {
            label: 'Countries',
            icon: 'bi bi-geo-alt',
            activate:"countries"
          },
          {
            label: 'Sites',
            icon: 'bi bi-pin-map',
            activate:"sites"
          },
          {
            label:'Visits',
            icon:'bi bi-pin-map',
            activate:"visits"
          },
          {
            label:'Work Orders',
            icon:'bi bi-receipt',
            activate:"workorders"
          },
          {
            label: 'Kits',
            icon: 'bi bi-boxes',
            activate:"kits"
          },
              
    ];
}


handleComponentChange(comp:any){
  this.activeComponent = comp
}


}