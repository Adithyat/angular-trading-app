import { Injectable } from "@angular/core";
import * as nes from "@hapi/nes/lib/Client";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class WebsocketService {
  private nesClient: any;

  constructor() {}

  async connect() {
    if (!this.nesClient) {
      // let protocol =
      //   window.location.protocol.indexOf("https") >= 0 ? "wss://" : "ws://";

      this.nesClient = new nes.Client(
        environment.webSocketURL //protocol + //window.location.origin.split("//").pop()
      );
      this.nesClient.connect();
      // const start = async () => {
      //   await this.nesClient.connect();
      //   //callback();
      // };

      //start();
    }
    return this.nesClient;
  }

  subscribeToLiveUpdates(stock, callback) {
    callback({
      stock: stock,
    });
    this.nesClient.subscribe("/livestream/" + stock, (update, flags) => {
      if (callback) callback(update);
      // console.log('stock updates: ' + stock, update)
    });
  }
}
