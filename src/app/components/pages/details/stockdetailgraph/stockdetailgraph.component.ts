import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "stockdetailgraph",
  templateUrl: "./stockdetailgraph.component.html",
  styleUrls: ["./stockdetailgraph.component.css"],
})
export class StockdetailgraphComponent implements OnInit {
  @Input() symbol: string[];
  constructor() {}

  ngOnInit() {}
}
