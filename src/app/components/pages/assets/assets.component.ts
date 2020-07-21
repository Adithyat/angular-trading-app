import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services'

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  allocations: string[]=[];
  constructor(private stockService: StockService ) { }

  ngOnInit() {
    this.stockService.getAllocations().subscribe(data=>data.map(s=>this.allocations.push(s.symbol)))
    //this.stockService.getAllocations().toPromise().then((data) => data.map((s) => this.allocations.push(s.symbol)));
    // this.stockService
    // .getAllocations()
    // .subscribe((data) =>
    //   data.map((s) => this.allocations.push(s.symbol))
    // );

  }

}
