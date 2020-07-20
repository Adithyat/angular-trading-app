import { Component, OnInit, Input, AfterContentInit, AfterViewInit, AfterContentChecked, OnChanges } from '@angular/core';
import { TradingService } from 'src/app/trading.service';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'stockslist',
  templateUrl: './stockslist.component.html',
  styleUrls: ['./stockslist.component.css']
})
export class StockslistComponent implements OnInit, AfterContentInit, AfterViewInit, AfterContentChecked, OnChanges {
  @Input() listtype: number
  follows: string[]=[];
  amounts: number[]=[];
  prices: number[]=[];

  constructor(private tradingService: TradingService) { }

  ngOnInit() {
    this.reinit()
  }
  ngOnChanges() {
  }
  ngAfterContentInit(){
    //console.log('content')
  }
  ngAfterContentChecked(){
    //this.getPrices()
  }
  ngAfterViewInit(){
    //console.log('view')
  }
  reinit(){
    this.tradingService.getWatchList().subscribe(data=>this.follows= data.map((s):string=>s.symbol)),
    this.tradingService.getAllocations().subscribe(data=>data.map((s)=>this.amounts.push(s.amount)))
    this.getPrices()
  }
  removeStock(symbol:string){
    console.log(symbol)
    this.tradingService.changeWatchList(symbol,"REMOVE").subscribe()
  }
  buyStock(symbol:string){
    this.tradingService.doTransaction(symbol,"BUY",1).subscribe()
  }
  sellStock(symbol:string){
    this.tradingService.doTransaction(symbol,"SELL",1).subscribe()
  }
  getPrices(){
    this.tradingService.getWatchList().pipe(
      map(response => response),
      mergeMap((stocks: any[]) => {
        return forkJoin(
          stocks.map(stock => {
            return this.tradingService.getLatestPrice(stock.symbol)
              .pipe(
                map((res: any) => {
                  //console.log(res);
                  return Math.round(res.price*10)/10;
                })
              );
          })
        )
      }))
      .subscribe(prices => {
        this.prices = prices
      });
  }


}
