import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class WatchlistService {
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
  getWatchList(): Observable<{ symbol: string }[]> {
    return this.http.get<{ symbol: string }[]>(
      `${environment.apiURL}userdata/watchlist`,
      environment.user
    );
  }
  changeWatchList(symbol: string, action: string) {
    return this.http.post(
      `${environment.apiURL}userdata/watchlist`,
      { symbol: symbol, action: action },
      environment.user
    );
  }
}
