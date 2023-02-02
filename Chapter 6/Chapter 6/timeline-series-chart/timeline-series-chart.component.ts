import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import TimeLine from 'highcharts/modules/timeline';
TimeLine(Highcharts);


@Component({
  selector: 'app-timeline-series-chart',
  templateUrl: './timeline-series-chart.component.html',
  styleUrls: ['./timeline-series-chart.component.css']
})
export class TimelineSeriesChartComponent  {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'timeline',
      inverted: true
    },
    yAxis: {
      visible: false
    },
    title: {
      text: 'Journey of IECE Group'
    },
    series: [{
      type: 'timeline',
      dataLabels: {
        connectorColor: 'black',
        connectorWidth: 3
      },
      data: [{
        name: 'Company Founded',
        label: '1975: Institute Of Electronics Born',
        description: 'In the year 1975, Institute of Electronics found to provide trainings for Electrical/Electronics Engineers'
      }, {
        name: 'IECE founded',
        label: '1999: Company Expend into Computer Education',
        description: 'With new Name IECE, company starts provide training into Computer Scienece Students as well'
      }, {
        name: 'IECE Inventory Controller Launch',
        label: '2003: First Software Launch',
        description: '4th December 2003, First Software launch with name IECE Inventory Controller'
      }, {
        name: 'IECE Digital launch',
        label: '2018: IECE Digital founded',
        description: 'IECE Digital launch, to provide world class animation and VFX.'
      }],
    }]
  };
}