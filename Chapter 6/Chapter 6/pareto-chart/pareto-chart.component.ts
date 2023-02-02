import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import Pareto from 'highcharts/modules/pareto';
Pareto(Highcharts);

@Component({
  selector: 'app-pareto-chart',
  templateUrl: './pareto-chart.component.html',
  styleUrls: ['./pareto-chart.component.css']
})
export class ParetoChartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Haifall Reasons for Men',
    },
    tooltip: {
      shared: true,
    },
    xAxis: {
      categories: [
        'Genetically',
        'Cosmetic damage',
        'Stress',
        'Smoke',
        'Vitamin Defficiency',
        'Infections',
      ],
    },
    yAxis: [{
      title: {
        text: ''
      }
    }, {
      title: {
        text: ''
      },
      minPadding: 0,
      maxPadding: 0,
      max: 100,
      min: 0,
      opposite: true,
      labels: {
        format: "{value}%"
      }
    }],
    series: [{
      type: 'pareto',
      name: 'Pareto',
      yAxis: 1, //number of declared yAxis
      baseSeries: 1 //index of column series
    }, {
      name: 'Frequency',
      type: 'column',
      data: [50, 15, 11, 6, 3, 2],
      color: '#FF0000'
    }]
  };
}

