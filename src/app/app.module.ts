import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockslistComponent,TransactionslistComponent,StockgraphComponent,HomeComponent,AssetsComponent,DetailsComponent, WatchliststocksComponent, UsertransactionsComponent, WatchlistgraphComponent } from './components';
import { HttpClientModule } from '@angular/common/http';

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
    WatchlistgraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
