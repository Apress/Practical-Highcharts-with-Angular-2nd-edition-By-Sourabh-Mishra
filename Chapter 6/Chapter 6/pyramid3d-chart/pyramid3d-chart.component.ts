import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);
import cylinder from 'highcharts/modules/cylinder';
cylinder(Highcharts);
import funnel3d from 'highcharts/modules/funnel3d';
funnel3d(Highcharts);
import pyramid3d from 'highcharts/modules/pyramid3d';
pyramid3d(Highcharts);

interface ExtendPlotSeriesOptions extends Highcharts.PlotSeriesOptions{
  height:string;
}


@Component({
  selector: 'app-pyramid3d-chart',
  templateUrl: './pyramid3d-chart.component.html',
  styleUrls: ['./pyramid3d-chart.component.css']
})
export class Pyramid3dChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Pyramid3D Chart Demo'
    },
    chart: {
      renderTo: 'container',
      type: 'pyramid3d',
      options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        viewDistance: 50
      }
    },
    series: [{
      type: 'pyramid3d',
      name: 'Customers',
      data: [
        ['Customer visits Website totally', 8000],
        ['App Downloads', 5150],
        ['Requested price list', 2000],
        ['Proposal sent', 1600],
      ]
    }],
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b> ({point.y:,.0f})',
          allowOverlap: true,
        },
        width: '40%',
        height: '60%',
      }as ExtendPlotSeriesOptions
    },
  }
}
