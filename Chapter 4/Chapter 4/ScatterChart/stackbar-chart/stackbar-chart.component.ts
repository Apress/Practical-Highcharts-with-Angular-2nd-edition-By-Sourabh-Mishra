import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

// Extend SeriesStatesHoverOptionsObject type
interface ExtendedSeriesStatesHoverOptionsObject
  extends Highcharts.SeriesStatesHoverOptionsObject {
  marker: object;
}

// Extend XAxisTitleOptions type
interface ExtendedXAxisTitleOptions extends Highcharts.XAxisTitleOptions {
  enabled: boolean;
}

interface ExtenedZoom extends Highcharts.ChartOptions
{
  zoomType: string
}

@Component({
  selector: 'app-stackbar-chart',
  templateUrl: './stackbar-chart.component.html',
  styleUrls: ['./stackbar-chart.component.css']
})
export class StackbarChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
    } as ExtenedZoom,
    title: {
      text: 'Height V/s Weight of S.T. Thomas Collage by Gender',
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Height (cm)',
      } as ExtendedXAxisTitleOptions,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: 'Weight (kg)',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 40,
      floating: true,
      borderWidth: 1,
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'black',
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          } as ExtendedSeriesStatesHoverOptionsObject,
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x} cm, {point.y} kg',
        },
      },
    },
    series: [
      {
        type: 'scatter',
        name: 'Female',
        color: 'red',
        data: [
          [151.2, 53.1],
          [157.3, 51.0],
          [169.5, 69.2],
          [147.0, 50.0],
          [175.8, 83.6],
          [150.0, 51.0],
          [151.1, 57.9],
          [156.0, 79.8],
          [146.2, 46.8],
          [158.1, 74.9],
        ],
      },
      {
        type: 'scatter',
        name: 'Male',
        color: 'blue',
        data: [
          [172.0, 63.7],
          [165.3, 72.7],
          [183.5, 79.2],
          [176.5, 75.7],
          [177.2, 85.8],
          [171.5, 64.8],
          [181, 82.4],
          [174.5, 77.4],
          [177.0, 61.0],
          [174.0, 83.7],
        ],
      },
    ],
  };
}
