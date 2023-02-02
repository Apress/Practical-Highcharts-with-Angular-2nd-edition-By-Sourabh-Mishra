import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

@Component({
  selector: 'app-pie3d-chart',
  templateUrl: './pie3d-chart.component.html',
  styleUrls: ['./pie3d-chart.component.css']
})
export class Pie3dChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 65,
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 65,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    title: {
      text: 'Programming Languages used by developers worldwide'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
      name: 'Uses',
      colorByPoint: true,
      type: 'pie',
      data: [{
        name: 'C#',
        y: 55,
        sliced: true,
        selected: true
      }, {
        name: 'VB',
        y: 25
      }, {
        name: 'J#',
        y: 10
      }, {
        name: 'VC++',
        y: 10
      }]
    }]
  };
}