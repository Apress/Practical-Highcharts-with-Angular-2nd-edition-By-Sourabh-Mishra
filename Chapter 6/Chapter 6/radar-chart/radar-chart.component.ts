import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {
  title = 'myHighChartsApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      polar: true,
      type: 'line',
    },
    pane: {
      size: '80%'
    },
    title: {
      text: 'Comparison of Mobile Phones',
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    xAxis: {
      categories: ['Camera', 'Battery', 'Brand', 'Memory',
        'Display', 'Durable'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },
    legend: {
      align: 'left',
      verticalAlign: 'middle'
    },
    series: [{
      type: 'line',
      name: 'VG Mobiles',
      data: [5, 4, 4, 3, 2, 3],
      pointPlacement: 'on'
    }, {
      name: 'Kiara Mobiles',
      type: 'line',
      data: [4, 3, 5, 1, 5, 4],
      pointPlacement: 'on'
    }],
  };
}
