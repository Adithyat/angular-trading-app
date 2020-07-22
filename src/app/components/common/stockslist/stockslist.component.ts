import { Component, OnInit, Input } from "@angular/core";
import { StockService } from "src/app/services";
import { Stock } from "src/app/models";
@Component({
  selector: "stockslist",
  templateUrl: "./stockslist.component.html",
  styleUrls: ["./stockslist.component.css"],
})
export class StockslistComponent implements OnInit {
  @Input() stocksymbol: string;
  @Input() listtype: number;
  stock: Stock;
  quantity: number = null;

  constructor(private stockService: StockService) {}
  ngOnInit() {
    this.stock = this.stockService.getStock(this.stocksymbol);
  }

  buyStock(symbol: string) {
    let qty = 1;
    if (this.quantity) {
      qty = this.quantity;
    }
    this.stockService.doTransaction(symbol, "BUY", qty);
    this.quantity = null;
  }
  sellStock(symbol: string) {
    let qty = 1;
    if (this.quantity) {
      qty = this.quantity;
    }
    this.stockService.doTransaction(symbol, "SELL", qty);
    this.quantity = null;
  }

  // getPrices() {
  //   this.stockService
  //     .getWatchList()
  //     .pipe(
  //       map((response) => response),
  //       mergeMap((stocks: any[]) => {
  //         return forkJoin(
  //           stocks.map((stock) => {
  //             return this.stockService.getLatestPrice(stock.symbol).pipe(
  //               map((res: any) => {
  //                 //console.log(res);
  //                 return Math.round(res.price * 10) / 10;
  //               })
  //             );
  //           })
  //         );
  //       })
  //     )
  //     .subscribe((prices) => {
  //       this.prices = prices;
  //     });
  // }
}
