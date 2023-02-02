import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  title = 'myHighChartsApp';
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Industry Growth by Sector, 2017-2022'
    },
    xAxis: {
      categories: ["2017", "2018", "2019", "2020", "2021", "2022"],
    },
    yAxis: {
      title: {
        text: 'Revenue Generated in million'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    series: [{
      type:'line',
      name: 'IT',
      data: [400, 489, 354, 180, 785, 293]
    }, {
      type:'line',
      name: 'Cement',
      data: [180, 100, 50, 89, 105, 206]
    }, {
      type:'line',
      name: 'Pharmacy',
      data: [350, 400, 250, 400, 550, 480]
    }, {
      type:'line',
      name: 'Agriculture',
      data: [190, 210, 250, 280, 310, 500]
    }],
  }
}
