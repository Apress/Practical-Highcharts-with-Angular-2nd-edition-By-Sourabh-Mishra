import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';

// Introducing a custom property.
interface ExtendedChart extends Highcharts.Chart {
  plotBackground: SVGAElement;
}


@Component({
  selector: 'app-image-chart',
  templateUrl: './image-chart.component.html',
  styleUrls: ['./image-chart.component.css']
})
export class ImageChartComponent  {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: 'Sample Count by Range',
    },
    chart: {
      events: {
        render: function () {
          var chart = this as ExtendedChart,
            renderer = chart.renderer,
            bg = chart.plotBackground;
          renderer
            .image(
              'https://www.highcharts.com/samples/graphics/sun.png',
              100,
              100,
              30,
              30
            )
            .add();
        },
      },
    },
    xAxis: {
      categories: [
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
    },
    series: [
      {
        type: 'line',
        name: 'Temprature',
        data: [42.5, 41.3, 43.0, 44.0, 41.25, 42.52, 40.25, 44.5, 48.0, 48.2],
      },
    ],
  };
}
