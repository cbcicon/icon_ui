import { Component } from '@angular/core';
import { DataService } from '../../data-services/data.service';
@Component({
  selector: 'app-item-detail-landing',
  templateUrl: './forecast-chart.html'
})

export class ForecastChart {
  options: any;
  items: any;
  chartData: any = [];
  data: any = [];
  itemData: any;

  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    let rawData = this.dataService.getForecastChartData();
    let apiCall = this.dataService.getForecastChartDataAPI();
    console.log(apiCall);
    this.chartData = {
      labels: [],
      data: []
    };
    rawData.forEach((item: any) => {
      this.chartData.labels.push(item.name);
      this.chartData.data.push(item.value);
    });
      
    this.data = {
      labels: this.chartData.labels,
      datasets: [
        {
          type: 'line',
          borderWidth: 2,
          fill: false,  
          tension: 0.4,
          borderColor: "orange",
          data: this.chartData.data
        },
        {
          backgroundColor: "#A0CEC7",
          data: this.chartData.data,
          borderColor: 'white',
          borderWidth: 2
        }
        
      ]
    };

    this.options = {
      maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: false
            }
        };
  }
}