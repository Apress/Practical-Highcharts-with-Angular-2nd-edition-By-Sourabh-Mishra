import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stackbar-chart',
  templateUrl: './stackbar-chart.component.html',
  styleUrls: ['./stackbar-chart.component.css']
})
export class StackbarChartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Total hours studies in a week'
    },
    xAxis: {
      categories: ['Maths', 'Science', 'History', 'Social Science', 'English']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Hour studied'
      },
      stackLabels: {
        enabled: true,
        style: {
          color: 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        'yellow' || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      type: 'column',
      name: 'Rocy',
      data: [4, 2, 1, 8, 9]
    },
    {
      name: 'Luies',
      type: 'column',
      data: [1, 5, 1, 4, 2]
    },
    {
      type: 'column',
      name: 'Simon',
      data: [7, 2, 3, 1, 4]
    }]
  }
}
