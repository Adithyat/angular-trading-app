import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "stockdetails",
  templateUrl: "./stockdetails.component.html",
  styleUrls: ["./stockdetails.component.css"],
})
export class StockdetailsComponent implements OnInit {
  @Input() symbol: string;
  constructor() {}

  ngOnInit() {}
}
