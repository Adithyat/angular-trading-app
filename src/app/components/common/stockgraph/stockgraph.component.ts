import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "stockgraph",
  templateUrl: "./stockgraph.component.html",
  styleUrls: ["./stockgraph.component.css"],
})
export class StockgraphComponent implements OnInit {
  seriesOptions = [
    {
      type: "line",
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ],
    },
    {
      type: "line",
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ],
    },
    {
      type: "line",
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ],
    },
  ];
  chart = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "line",
        data: [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ],
      },
    ],
  });
  add() {
    this.chart.addSeries(
      {
        type: "line",
        data: [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ],
      },
      true,
      false
    );
  }

  constructor() {}

  ngOnInit() {}

  // success(data) {
  //   var name = this.url.match(/(msft|aapl|goog)/)[0].toUpperCase();
  //   var i = this.names.indexOf(name);
  //   this.seriesOptions[i] = {
  //     name: name,
  //     data: data
  //   };

  //   // As we're loading the data asynchronously, we don't know what order it
  //   // will arrive. So we keep a counter and create the chart when all the data is loaded.
  //   this.seriesCounter += 1;

  //   if (this.seriesCounter === this.names.length) {
  //     createChart();
  //   }
  // }

  // Highcharts.getJSON(
  //   'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json',
  //   success
  // );
  // Highcharts.getJSON(
  //   'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json',
  //   success
  // );
  // Highcharts.getJSON(
  //   'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json',
  //   success
  // );

  // createChart() {

  //   Highcharts.stockChart('container', {

  //     rangeSelector: {
  //       selected: 4
  //     },

  //     yAxis: {
  //       labels: {
  //         formatter: function () {
  //           return (this.value > 0 ? ' + ' : '') + this.value + '%';
  //         }
  //       },
  //       plotLines: [{
  //         value: 0,
  //         width: 2,
  //         color: 'silver'
  //       }]
  //     },

  //     plotOptions: {
  //       series: {
  //         compare: 'percent',
  //         showInNavigator: true
  //       }
  //     },

  //     tooltip: {
  //       pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
  //       valueDecimals: 2,
  //       split: true
  //     },

  //     series: this.seriesOptions
  //   });
  // }
}
