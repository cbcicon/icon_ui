import { Component } from '@angular/core';

@Component({
  selector: 'app-item-detail-landing',
  templateUrl: './item-detail-landing.component.html',
  styleUrls: ['./item-detail-landing.component.scss']
})
export class ItemDetailLandingComponent {

  options: any;
  items: any;
  chartData: any = [];
  data: any = [];
  activeComponent = "stock-and-scrap";
  itemData: any;
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = "#128474";
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    backgroundColor:  "#128474",
                    borderColor: documentStyle.getPropertyValue('--primary-100'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            scales: {
                x: {
                  barPercentage: 0.4
                },
                y: {
                  barPercentage: 0.4
                }

            }
        };
    }
  
  handleComponentChange(comp: any) {
    this.activeComponent = comp
  }
}
