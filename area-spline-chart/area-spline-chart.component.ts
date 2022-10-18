import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-spline-chart',
  templateUrl: './area-spline-chart.component.html',
  styleUrls: ['./area-spline-chart.component.css']
})
export class AreaSplineChartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Number of visitors visited Taj Mahal in a week'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
    },
    xAxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      plotBands: [{ // Design to visualize the weekend
        from: 5,
        to: 6,
        color: 'orange'
      }]
    },
    yAxis: {
      title: {
        text: 'Number of visitors'
      }
    },
    tooltip: {
      valueSuffix: ' people'
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.6
      }
    },
    series: [{
      type: 'areaspline',
      name: 'Taj Mahal',
      data: [5000, 2700, 3200, 3800, 4100, 5600, 6000]
    }]
  };
}