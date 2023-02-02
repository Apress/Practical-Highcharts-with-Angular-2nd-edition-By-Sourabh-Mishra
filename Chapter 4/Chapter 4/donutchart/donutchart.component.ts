import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent {
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'container',
      type: 'pie'
    },
    title: {
      text: 'Javascript framework used by developers worldwide'
    },
    plotOptions: {
      pie: {
        innerSize: '60%'
      }
    },
    series:
      [
        {
          type:'pie',
          name: 'Uses',
          data: [
            ['AngularJs', 10.2],
            ['Angular', 20.7],
            ['JQuery', 10],
            ['Vue', 3.1],
            ['ReactJs', 5.4]
          ]
        }
      ]
  }
}