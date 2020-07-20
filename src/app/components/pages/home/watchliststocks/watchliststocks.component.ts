import { Component, OnInit } from '@angular/core';
import { TradingService } from 'src/app/trading.service';

@Component({
  selector: 'watchliststocks',
  templateUrl: './watchliststocks.component.html',
  styleUrls: ['./watchliststocks.component.css']
})
export class WatchliststocksComponent implements OnInit {
  mshow: boolean=false;
  stocks: {name:string, symbol:string}[]=[];
  follow: string;
  constructor(private tradingService: TradingService) { }

  ngOnInit() {
    this.tradingService.getStockList().subscribe(data=>data.map(s=>this.stocks.push({name: s.name, symbol:s.symbol})))
  }
  addFollow(symbol:string){
    this.tradingService.changeWatchList(symbol,"ADD").subscribe()
  }

}
