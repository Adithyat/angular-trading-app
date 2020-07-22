import {
  Component,
  OnInit,
  Input,
  DoCheck,
  KeyValueDiffers,
} from "@angular/core";
import { StockService } from "src/app/services";
import { Stock } from "src/app/models";
@Component({
  selector: "stockslist",
  templateUrl: "./stockslist.component.html",
  styleUrls: ["./stockslist.component.css"],
})
export class StockslistComponent implements OnInit, DoCheck {
  @Input() stocksymbol: string;
  @Input() listtype: number;
  stock: Stock;
  quantity: number = null;
  isChanged: boolean = false;
  differ: any;
  objectGroup = [];

  constructor(
    private differs: KeyValueDiffers,
    private stockService: StockService
  ) {
    this.objectGroup.forEach((item) => {
      item.color = "new color";
    });
    this.differ = this.differs.find({}).create();
  }
  modelChanged(value) {
    console.log("model changed");

    this.isChanged = true;
    setTimeout(() => {
      this.isChanged = false;
    }, 1000);
  }
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
  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem((item) => {
        console.log("item changed", item);
      });
    }
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
