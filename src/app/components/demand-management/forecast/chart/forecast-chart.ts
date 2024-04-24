import { Component } from '@angular/core';

@Component({
  selector: 'app-item-detail-landing',
  templateUrl: './forecast-chart.html',
  styleUrls: ['./forecast-chart.scss']
})
export class ForecastChart {
  options: any;
  items: any;
  chartData: any = [];
  data: any = [];
  itemData: any;
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
        this.data = {
            labels: ['Jul-23','Sep-23','Oct-23','Nov-23', 'Dec-23', 'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24','Jun-24'],
            datasets: [
                {
                    borderWidth: 2,
                    backgroundColor:  "#128474",
                    borderColor: documentStyle.getPropertyValue('--primary-100'),
                    data: [61534, 56349, 42346, 64533, 57304, 45134, 40234,52014,51503,64634,45246,74613,59462]
                },
                {
                  type: 'line',
                  borderColor: "orange",
                  borderWidth: 2,
                  fill: false,
                  tension: 0.4,
                  data: [61534, 56349, 42346, 64533, 57304, 45134, 40234,52014,51503,64634,45246,74613,59462]
              },
            ]
        };

        this.options = {
          plugins: {
            legend: {display: false},
          },
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
}
