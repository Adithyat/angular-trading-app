import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subject } from "rxjs";
import { Stock, Transaction } from "src/app/models";

@Injectable({
  providedIn: "root",
})
export class StockService {
  private allocationSubscription = new Subject();
  private transactionSubscription = new Subject();
  private activeSubcriptions = new Map();

  constructor(private http: HttpClient) {}

  listenAllocations(): Subject<{ symbol: string; amount: number }[]> {
    this.http
      .get<{ symbol: string; amount: number }[]>(
        `${environment.apiURL}userdata/allocations`,
        environment.user
      )
      .subscribe((data) => this.allocationSubscription.next(data));
    return this.allocationSubscription as Subject<
      { symbol: string; amount: number }[]
    >;
  }
  // getAllocations(): Observable<{ symbol: string; amount: number }[]> {
  //   return this.http.get<{ symbol: string; amount: number }[]>(
  //     `${environment.apiURL}userdata/allocations`,
  //     environment.user
  //   );
  // }
  getLatestPrice(
    symbol: string
  ): Observable<{ stock: string; price: number; date: Date }> {
    return this.http.get<{ stock: string; price: number; date: Date }>(
      `${environment.apiURL}stocks/${symbol}/price`,
      environment.user
    );
  }
  getStock(symbol: string): Stock {
    let stock: Stock = {
      symbol: null,
      allocation: null,
      price: null,
    };
    stock.symbol = symbol;
    this.listenAllocations().subscribe((data) => {
      stock.allocation = data.find((d) => d.symbol === symbol).amount;
    });
    if (!this.activeSubcriptions[symbol]) {
      this.activeSubcriptions[symbol] = setInterval(() => {
        this.getLatestPrice(symbol).subscribe((data) => {
          stock.price = data.price;
        });
      }, 5000);
    }
    return stock;
  }

  doTransaction(symbol: string, action: string, quantity: number) {
    this.http
      .post(
        `${environment.apiURL}transactions`,
        { symbol: symbol, side: action, amount: quantity },
        environment.user
      )
      .subscribe((data) =>
        this.listenAllocations().subscribe((data) => this.listenTransactions())
      );
  }

  listenTransactions(): Subject<Transaction[]> {
    this.http
      .get<Transaction[]>(`${environment.apiURL}transactions`, environment.user)
      .subscribe((data) =>
        this.transactionSubscription.next(
          data.map(
            (d, i): Transaction => ({
              id: i,
              side: d.side,
              symbol: d.symbol,
              amount: d.amount,
              tickPrice: d.tickPrice,
              cost: d.cost,
            })
          )
        )
      );

    return this.transactionSubscription as Subject<Transaction[]>;
  }
}
