import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  constructor(private http: HttpClient) { }

  getStockList(): Observable<{name: string, symbol: string, lastTick: {stock: string, price: number, date: Date}}[]>{
    return this.http.get<{name: string, symbol: string, lastTick: {stock: string, price: number, date: Date}}[]>(`${environment.apiURL}stocks`)
  }
  changeWatchList(symbol:string,action:string){
    return this.http.post(`${environment.apiURL}userdata/watchlist`,{"symbol": symbol,"action": action},environment.user)
  }

  getWatchList(): Observable<{symbol:string}[]> {
    return this.http.get<{symbol:string}[]>(`${environment.apiURL}userdata/watchlist`,environment.user)
  }
  getAllocations(): Observable<{symbol:string,amount:number}[]> {
    return this.http.get<{symbol:string,amount:number}[]>(`${environment.apiURL}userdata/allocations`,environment.user)
  }
  getLatestPrice(symbol: string): Observable<{stock:string,price:number,date: Date}>{
    return this.http.get<{stock:string,price:number,date: Date}>(`${environment.apiURL}stocks/${symbol}/price`,environment.user)
  }

  doTransaction(symbol:string,action:string,quantity:number){
    return this.http.post(`${environment.apiURL}transactions`,{"symbol": symbol,"side": action,"amount":quantity},environment.user)
  }

}
