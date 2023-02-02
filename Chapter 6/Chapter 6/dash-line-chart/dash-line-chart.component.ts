import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

interface ExtendedTitle extends Highcharts.TitleOptions {
  borderColor: string,
  borderRadius: number,
  borderWidth: number
}

@Component({
  selector: 'app-dash-line-chart',
  templateUrl: './dash-line-chart.component.html',
  styleUrls: ['./dash-line-chart.component.css']
})
export class DashLineChartComponent {

  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Marks',
      backgroundColor: '#FCFFC5',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 3
    } as ExtendedTitle,
    xAxis: {
      categories: ['English', 'Science', 'Maths'],
      tickWidth: 1,
      tickLength: 20,
      tickPosition: 'inside',
      tickColor: 'red',
    },
    series: [{
      type: 'line',
      name: 'Ram',
      data: [40, 45, 50],
      dashStyle: 'Dot'
    },
    {
      type: 'line',
      name: 'Jack',
      data: [44, 35, 30],
      dashStyle: 'ShortDot'
    },
    {
      name: 'John',
      type: 'line',
      data: [34, 25, 32],
      dashStyle: 'Dash'
    },
    {
      name: 'kate',
      type: 'line',
      data: [24, 38, 44],
      dashStyle: 'ShortDashDot'
    },
    ]
  };
}

