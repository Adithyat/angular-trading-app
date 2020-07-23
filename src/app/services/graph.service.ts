import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subject } from "rxjs";
import { Graph } from "src/app/models";

@Injectable({
  providedIn: "root",
})
export class GraphService {
  constructor(private http: HttpClient) {}

  listenGraphToday(symbol: string): Observable<Graph> {
    return this.http.get<Graph>(
      `${environment.apiURL}stocks/${symbol}/price/today`,
      environment.user
    );
  }
  listenGraphYear(symbol: string): Observable<Graph> {
    return this.http.get<Graph>(
      `${environment.apiURL}stocks/${symbol}/price/yearly`,
      environment.user
    );
  }
}
