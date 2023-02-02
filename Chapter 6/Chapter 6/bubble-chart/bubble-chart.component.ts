import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

interface ExtendedPointOptionsObject extends Highcharts.PointOptionsObject {
  country: string;
}

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
    },

    legend: {
      enabled: false,
    },

    title: {
      text: 'Total Revenue for ABC Software (Country wise)',
    },
    xAxis: {
      gridLineWidth: 1,
      title: {
        text: 'Market Share',
      },
      labels: {
        format: '{value} ',
      },
    },
  yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: 'Sales in CR',
      },
      
      labels: {
        format: '{value} $',
      },
      maxPadding: 0.2,
    },
  tooltip: {
      useHTML: true,
      headerFormat: '<table>',
      pointFormat:
        '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
        '<tr><th>Market Share:</th><td>{point.x} %</td></tr>' +
        '<tr><th>Sales:</th><td>{point.y} Cr</td></tr>' +
        '<tr><th>Sales Growth:</th><td>{point.z}%</td></tr>',
      footerFormat: '</table>',
      followPointer: true,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
      },
    },
    series: [
      {
        type: 'bubble',
        data: [
          { x: 40, y: 70, z: 80, name: 'DE', country: 'Germany' },
          { x: 45, y: 70, z: 135, name: 'FI', country: 'Finland' },
          { x: 35, y: 68, z: 180, name: 'ES', country: 'Spain' },
          { x: 30, y: 45, z: 142, name: 'FR', country: 'France' },
          { x: 55, y: 65, z: 190, name: 'IN', country: 'India' },
        ] as Array<ExtendedPointOptionsObject>,
      },
    ],
  };
}