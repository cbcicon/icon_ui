import { Component } from '@angular/core';

@Component({
  selector: 'app-item-detail-landing',
  templateUrl: './item-detail-landing.component.html',
  styleUrls:['./item-detail-landing.component.scss']
})
export class ItemDetailLandingComponent {


  items: any;

  activeComponent = "stock-and-scrap" ;
    
  ngOnInit() {
    this.items = [
      
        {

        items: [
          {
            label: 'stock and scrap',
            icon: 'bi bi-box-seam',
            activate:"stock-and-scrap"
          },
          {
            label: 'Replacement',
            icon: 'bi bi-arrow-left-right',
            activate:"replacement"
          },
          {
            label: 'Ring Fence',
            icon: 'bi bi-arrow-repeat',
            activate:"ring-fence"
          },
          {
            label: 'Purchase Orders',
            icon: 'bi bi-file-earmark-text',
            activate:"purchase-bill"
          }

        ]
        }
    ];
}


handleComponentChange(comp:any){
  this.activeComponent = comp
}


}
