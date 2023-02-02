import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import GanttModule from 'highcharts/modules/gantt';
GanttModule(Highcharts);

Highcharts.setOptions({
title: {
style: {
color: 'blue'
    }
  },
legend: {
enabled: false
  }
});

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartGantt: Highcharts.Options = {
  xAxis: {
  min: Date.UTC(2023, 3, 1),
  max: Date.UTC(2023, 3, 31)
      },
  title: {
  text: 'IECE Inventory Controller Project Progress'
      },
  series: [{
  name: 'IECE Inventory Controller Project',
  type: 'gantt',
  data: [{
  name: 'Start Project Requirement Analysis',
  start: Date.UTC(2023, 3, 5),
  end: Date.UTC(2023, 3, 15),
  completed: 0.90
        },
        {
  name: 'Development',
  start: Date.UTC(2023, 3, 11),
  end: Date.UTC(2023, 3, 22),
  completed: {
  amount: 0.35,
  fill: 'green'
          }
        },
        {
  name: 'Continuous Testing Software',
  start: Date.UTC(2023, 3, 15),
  end: Date.UTC(2023, 3, 29)
        }]
      }]
    };
  }
