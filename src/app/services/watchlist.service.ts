import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class WatchlistService {
  private watchlistSubscription = new Subject();

  constructor(private http: HttpClient) {}

  getStockList(): Observable<
    {
      name: string;
      symbol: string;
      lastTick: { stock: string; price: number; date: Date };
    }[]
  > {
    return this.http.get<
      {
        name: string;
        symbol: string;
        lastTick: { stock: string; price: number; date: Date };
      }[]
    >(`${environment.apiURL}stocks`);
  }
  listenWatchList(): Subject<{ symbol: string }[]> {
    this.http
      .get<{ symbol: string }[]>(
        `${environment.apiURL}userdata/watchlist`,
        environment.user
      )
      .subscribe((data) => this.watchlistSubscription.next(data));
    return this.watchlistSubscription as any;
  }
  changeWatchList(symbol: string, action: string) {
    this.http
      .post(
        `${environment.apiURL}userdata/watchlist`,
        { symbol: symbol, action: action },
        environment.user
      )
      .subscribe((data) => this.listenWatchList());
  }
}
