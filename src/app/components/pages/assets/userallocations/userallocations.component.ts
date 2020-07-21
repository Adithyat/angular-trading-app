import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services';

@Component({
  selector: 'userallocations',
  templateUrl: './userallocations.component.html',
  styleUrls: ['./userallocations.component.css']
})
export class UserallocationsComponent implements OnInit {
  allocations: string[]=[];
  constructor(private stockService: StockService ) { }

  ngOnInit() {
    this.stockService.getAllocations().subscribe(data=>data.map(s=>this.allocations.push(s.symbol)))
  }

}
