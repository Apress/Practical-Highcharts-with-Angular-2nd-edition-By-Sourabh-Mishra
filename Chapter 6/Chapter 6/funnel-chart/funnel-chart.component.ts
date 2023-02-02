import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);
import cylinder from 'highcharts/modules/cylinder'
cylinder(Highcharts);
import funnel3d from 'highcharts/modules/funnel3d';
funnel3d(Highcharts);

interface ExtendPlotSeriesOptions extends Highcharts.PlotSeriesOptions{
  height:string;
}

@Component({
  selector: 'app-funnel-chart',
  templateUrl: './funnel-chart.component.html',
  styleUrls: ['./funnel-chart.component.css']
})
export class FunnelChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Highcharts Funnel3D Chart'
    },
    chart: {
      renderTo: 'container',
      type: 'funnel3d',
      options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        viewDistance: 50
      }
    },
    series: [{
      type: 'funnel3d',
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
        height: '50%',
        width: '40%',
        neckWidth: '15%',
        neckHeight: '15%',
      } as ExtendPlotSeriesOptions
    },
  }
}

