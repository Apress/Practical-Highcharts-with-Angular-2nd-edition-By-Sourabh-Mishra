import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);

@Component({
  selector: 'app-drilldownchart',
  templateUrl: './drilldownchart.component.html',
  styleUrls: ['./drilldownchart.component.css']
})
export class DrilldownchartComponent {
  title = 'myHighChartsApp';
  highcharts = Highcharts;
  chartOptions: Highcharts.Options  = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart with drill down Feature'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
      type:'pie',
      name: 'JavaScript Frameworks',
      data: [
        {
          name: 'Angular',
          y: 62.12,
          drilldown: 'angular-versions'
        },
        ['VueJs', 9.35],
        ['ReactJs', 15.89],
        ['Jquery', 12.64]
      ]
    }],
    drilldown: {
      series: [{
        type:'pie',
        name: 'Angular versions',
        id: 'angular-versions',
        data: [
          ['Angular Js', 17.07],
          ['Angular 2', 15],
          ['Angular 5', 16],
          ['Angular 8', 20.58],
          ['Angular 10', 27.35],
          ['Angular 14', 47.35]
        ]
      }]
    }
  }
}

