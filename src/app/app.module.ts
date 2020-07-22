import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "./app-routing.module";
import { ChartModule } from "angular-highcharts";
import { AppComponent } from "./app.component";
import {
  StockslistComponent,
  TransactionslistComponent,
  StockgraphComponent,
  HomeComponent,
  AssetsComponent,
  DetailsComponent,
  WatchliststocksComponent,
  UsertransactionsComponent,
  WatchlistgraphComponent,
  StockdetailsComponent,
  StocktransactionsComponent,
  StockdetailgraphComponent,
  UserallocationsComponent,
} from "./components";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssetsComponent,
    DetailsComponent,
    WatchliststocksComponent,
    StockslistComponent,
    StockgraphComponent,
    TransactionslistComponent,
    UsertransactionsComponent,
    WatchlistgraphComponent,
    StocktransactionsComponent,
    StockdetailsComponent,
    StockdetailgraphComponent,
    UserallocationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
