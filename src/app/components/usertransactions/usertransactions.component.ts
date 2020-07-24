import { Component, OnInit } from "@angular/core";
import { StockService } from "../../services";
import { Transaction } from "../../models";

@Component({
  selector: "usertransactions",
  templateUrl: "./usertransactions.component.html",
  styleUrls: ["./usertransactions.component.css"],
})
export class UsertransactionsComponent implements OnInit {
  transactions: Transaction[];
  p: number;
  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService
      .listenTransactions()
      .subscribe((data) => (this.transactions = data));
  }
}
