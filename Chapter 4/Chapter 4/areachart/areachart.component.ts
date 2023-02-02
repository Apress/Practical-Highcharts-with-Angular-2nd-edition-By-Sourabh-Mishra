import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Average scored by students in Computer Science'
    },
    xAxis: {
      categories: ['Quarterly', 'Six Monthly', 'Final Year'],
    },
    yAxis: {
      title: {
        text: 'Average Scores'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    series: [{
      type:'area',
      name: 'Science Score',
      data: [45, 75, 80]
    }],
  }
}