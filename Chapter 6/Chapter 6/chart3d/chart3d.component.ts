import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);

// Extending default chart type
interface ExtendedChart3dFrameOptions extends Highcharts.Chart3dFrameOptions {
  side: object;
}

@Component({
  selector: 'app-chart3d',
  templateUrl: './chart3d.component.html',
  styleUrls: ['./chart3d.component.css']
})
export class Chart3dComponent {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 45,
        depth: 150,
        viewDistance: 50,
        axisLabelPosition: 'auto',
        fitToPlot: true,
        frame: {
          bottom: {
            size: 10,
            color: 'orange',
          },
          back: {
            size: 10,
            color: 'orange',
          },
          side: {
            size: 10,
            color: 'orange',
          },
        } as ExtendedChart3dFrameOptions,
      },
    },
    title: {
      text: 'Real Time Data Example',
    },
    xAxis: {
      categories: ['English', 'Maths', 'Science'],
    },
    yAxis: {
      title: {
        text: 'Marks',
      },
    },
    plotOptions: {
      column: {
        depth: 65,
      },
    },
    series: [
      {
        type: 'column',
        data: [35, 49, 42],
      },
    ],
  };
}
