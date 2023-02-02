import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);
import cylinder from 'highcharts/modules/cylinder'
cylinder(Highcharts);

interface ExtendedPlotSeriesOptions extends Highcharts.PlotSeriesOptions {
  depth: any;
}

@Component({
  selector: 'app-cylider-chart',
  templateUrl: './cylider-chart.component.html',
  styleUrls: ['./cylider-chart.component.css']
})
export class CyliderChartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'container',
      type: 'cylinder',
      options3d:
      {
        enabled: true,
        beta: 15,
        alpha: 15,
        viewDistance: 15,
        depth: 50,
      }
    },
    title: {
      text: 'Real Time Data Example'
    },
    xAxis: {
      categories: ['English', 'Maths', 'Science']
    },
    yAxis: {
      title: {
        text: 'Marks'
      },
    },
    plotOptions: {
      series: {
        depth: 25,
        colorByPoint: true
      } as ExtendedPlotSeriesOptions
    },
    series: [{
      type: 'cylinder',
      data: [35, 49, 42]
    }],
  }
}
