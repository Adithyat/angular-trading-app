import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WatchlistgraphComponent } from "./watchlistgraph.component";

describe("WatchlistgraphComponent", () => {
  let component: WatchlistgraphComponent;
  let fixture: ComponentFixture<WatchlistgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistgraphComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
