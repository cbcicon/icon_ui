import { Component } from '@angular/core';

@Component({
  selector: 'app-study-detail-landing',
  templateUrl: './study-detail-landing.component.html',
  styleUrls:['./study-detail-landing.component.scss']
})
export class StudyDetailLandingComponent {


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
            label: 'Inventory Review',
            icon: 'bi bi-boxes',
            activate:"inventory-review"
          },
          {
            label: 'Summary',
            icon: 'bi bi-info-circle',
            activate:"summary"
          }        
    ];
}


handleComponentChange(comp:any){
  this.activeComponent = comp
}


}