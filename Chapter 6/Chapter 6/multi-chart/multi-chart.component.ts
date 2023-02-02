import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
interface ZoomExtend extends Highcharts.ChartOptions{
  zoomType : string;
}
interface ExtendedOptions extends Highcharts.Options
{
  labels : object;
}

@Component({
  selector: 'app-multi-chart',
  templateUrl: './multi-chart.component.html',
  styleUrls: ['./multi-chart.component.css']
})
export class MultiChartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: ExtendedOptions = {
    chart: {
      zoomType: 'xy',
    } as ZoomExtend,
    title: {
      text: 'Mobile Operating System used by diffrent Countries in Percentage',
    },
    labels: {
      items: [
        {
          html: 'Total product used',
          style: {
            left: '550px',
            top: '18px',
            color: 'black',
          },
        },
      ],
    },
    xAxis: {
      categories: ['IOS', 'Android', 'Windows', 'Black Berry', 'Symbian'],
    },
    series: [
      {
        type: 'column',
        name: 'India',
        data: [25, 55, 10, 5, 5],
        color:'LightSalmon',
      },
      {
        type: 'column',
        name: 'UK',
        data: [57, 30, 7, 3, 3],
        color:'olive',
      },
      {
        type: 'column',
        name: 'US',
        data: [50, 30, 15, 3, 2],
        color:'darkred'
      },
      {
        type: 'spline',
        name: 'Average',
        data: [44, 38.3, 10.67, 3.67, 3.34],
        marker: {
          lineWidth: 2,
          lineColor: 'green',
          fillColor: 'white',
        },
      },
      {
        type: 'pie', //total
        name: 'Total consumption',
        data: [
          {
            name: 'India',
            y: 100,
            color: 'LightSalmon',
          },
          {
            name: 'UK',
            y: 100,
            color: 'olive',
          },
          {
            name: 'US',
            y: 100,
            color: 'darkred',
          },
        ],
        center: [590, 80],
        size: 120,
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  };
}