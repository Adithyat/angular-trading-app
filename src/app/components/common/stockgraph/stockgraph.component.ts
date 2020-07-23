import { Component, Input, OnChanges } from "@angular/core";
import { Chart } from "angular-highcharts";
import { GraphService, StockService } from "src/app/services";

@Component({
  selector: "stockgraph",
  templateUrl: "./stockgraph.component.html",
  styleUrls: ["./stockgraph.component.css"],
})
export class StockgraphComponent implements OnChanges {
  @Input() stocks: string[];
  @Input() graphtype: number;
  chart: Chart;
  private activeSubcriptions = new Map();
  addLine(symbol: string, d) {
    this.chart.addSeries(
      {
        type: "line",
        name: symbol,
        data: d,
      },
      true,
      false
    );
  }

  constructor(
    private graphService: GraphService,
    private stockService: StockService
  ) {}

  ngOnChanges() {
    this.selectYear();
  }
  getData(data) {
    if (this.graphtype) {
      return data.aggregated.map((p): { x: Date; y: Number } => ({
        x: new Date(p.date),
        y:
          (p.price - Math.min(...data.aggregated.map((p) => p.price))) /
          (Math.max(...data.aggregated.map((p) => p.price)) -
            Math.min(...data.aggregated.map((p) => p.price))),
      }));
    } else {
      this.addLine(
        "STRK (aggregated)",
        data.aggregated.map((p): { x: Date; y: Number } => ({
          x: new Date(p.date),
          y: p.price,
        }))
      );
      return data.detailed.map((p): { x: Date; y: Number } => ({
        x: new Date(p.date),
        y: p.price,
      }));
    }
  }
  createChart(period: string) {
    this.chart = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: period + " Stock Prices",
      },
      credits: {
        enabled: false,
      },
      yAxis: {
        max: this.graphtype,
      },
      xAxis: {
        type: "datetime",
      },
    });
  }
  selectLive() {
    this.createChart("Live");
    this.addLine(this.stocks[0], []);
    if (!this.activeSubcriptions[this.stocks[0]]) {
      this.activeSubcriptions[this.stocks[0]] = setInterval(() => {
        this.stockService.getLatestPrice(this.stocks[0]).subscribe((data) => {
          this.chart.addPoint(data.price);
        });
      }, 5000);
    }
  }
  selectToday() {
    this.createChart("Todays");
    this.stocks.forEach((stock) =>
      this.graphService
        .listenGraphToday(stock)
        .subscribe((data) => this.addLine(stock, this.getData(data)))
    );
  }
  selectYear() {
    this.createChart("Yearly");
    this.stocks.forEach((stock) =>
      this.graphService
        .listenGraphYear(stock)
        .subscribe((data) => this.addLine(stock, this.getData(data)))
    );
  }
}
