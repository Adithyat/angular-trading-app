import { Component, OnInit, Input } from "@angular/core";
import { StockService } from "src/app/services";
import { Stock } from "src/app/models/stock";
@Component({
  selector: "stockslist",
  templateUrl: "./stockslist.component.html",
  styleUrls: ["./stockslist.component.css"],
})
export class StockslistComponent implements OnInit {
  @Input() stocksymbol: string;
  stock: Stock;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stock = this.stockService.getStock(this.stocksymbol);
    // this.stock.symbol = this.stocksymbol;
    // this.stockService.getAllocations().subscribe((data) => {
    //   this.stock.allocation = data.find(
    //     (d) => d.symbol === this.stocksymbol
    //   ).amount;
    // });
    // setInterval(() => {
    //   this.stockService.getLatestPrice(this.stocksymbol).subscribe((data) => {
    //     this.stock.price = Math.round(data.price * 10) / 10;
    //   });
    // }, 3000);
  }
  buyStock(symbol: string) {
    this.stockService.doTransaction(symbol, "BUY", 1);
  }
  sellStock(symbol: string) {
    this.stockService.doTransaction(symbol, "SELL", 1);
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
