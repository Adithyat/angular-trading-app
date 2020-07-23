import { Component, OnInit } from "@angular/core";
import { WatchlistService } from "src/app/services";

@Component({
  selector: "watchlistgraph",
  templateUrl: "./watchlistgraph.component.html",
  styleUrls: ["./watchlistgraph.component.css"],
})
export class WatchlistgraphComponent implements OnInit {
  follows: string[] = [];
  graphtype: number = 0;
  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.watchlistService
      .listenWatchList()
      .subscribe((data) => (this.follows = data.map((s) => s.symbol)));
  }
}
