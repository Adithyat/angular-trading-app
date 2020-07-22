import { Component, OnInit, Input } from "@angular/core";
import { StockService } from "src/app/services/stock.service'
import { Transaction } from "src/app/models";
@Component({
  selector: 'stocktransactions',
  templateUrl: './stocktransactions.component.html',
  styleUrls: ['./stocktransactions.component.css']
})
export class StocktransactionsComponent implements OnInit {
  @Input() symbol: string;
  transactions: Transaction[];
  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stockService
      .listenTransactions()
      .subscribe((data) => this.transactions= data.filter(d=>d.symbol===this.symbol));
  }

}
