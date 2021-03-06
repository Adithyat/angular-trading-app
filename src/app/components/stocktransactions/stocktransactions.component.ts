import { Component, OnInit, Input } from "@angular/core";
import { StockService } from "../../services";
import { Transaction } from "../../models";
@Component({
  selector: "stocktransactions",
  templateUrl: "./stocktransactions.component.html",
  styleUrls: ["./stocktransactions.component.css"],
})
export class StocktransactionsComponent implements OnInit {
  @Input() symbol: string;
  transactions: Transaction[];
  p: number;
  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService
      .listenTransactions()
      .subscribe(
        (data) =>
          (this.transactions = data.filter((d) => d.symbol === this.symbol))
      );
  }
}
