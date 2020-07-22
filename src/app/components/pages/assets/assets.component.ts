import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assets",
  templateUrl: "./assets.component.html",
  styleUrls: ["./assets.component.css"],
})
export class AssetsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //this.stockService.getAllocations().toPromise().then((data) => data.map((s) => this.allocations.push(s.symbol)));
    // this.stockService
    // .getAllocations()
    // .subscribe((data) =>
    //   data.map((s) => this.allocations.push(s.symbol))
    // );
  }
}
