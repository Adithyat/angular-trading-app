import { Component, OnInit } from "@angular/core";
import { WatchlistService } from "src/app/services";

@Component({
  selector: "watchliststocks",
  templateUrl: "./watchliststocks.component.html",
  styleUrls: ["./watchliststocks.component.css"],
})
export class WatchliststocksComponent implements OnInit {
  mshow: boolean = false;
  stocks: { name: string; symbol: string }[] = [];
  follow: string;
  follows: string[] = [];
  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.watchlistService
      .getStockList()
      .subscribe((data) =>
        data.map((s) => this.stocks.push({ name: s.name, symbol: s.symbol }))
      );
    this.watchlistService
      .listenWatchList()
      .subscribe((data) => (this.follows = data.map((s) => s.symbol)));
  }
  addFollow(symbol: string) {
    this.watchlistService.changeWatchList(symbol, "ADD");
  }
  removeStock(symbol: string) {
    console.log(symbol);
    this.watchlistService.changeWatchList(symbol, "REMOVE");
  }
}
