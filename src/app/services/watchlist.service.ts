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

  getAllStocks(): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}stocks`);
  }
  listenWatchList(): Subject<{ symbol: string }[]> {
    this.http
      .get<{ symbol: string }[]>(
        `${environment.apiURL}userdata/watchlist`,
        environment.user
      )
      .subscribe((data) => this.watchlistSubscription.next(data));
    return this.watchlistSubscription as Subject<{ symbol: string }[]>;
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
