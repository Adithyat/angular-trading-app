import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WatchliststocksComponent } from "./watchliststocks.component";

describe("WatchliststocksComponent", () => {
  let component: WatchliststocksComponent;
  let fixture: ComponentFixture<WatchliststocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatchliststocksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchliststocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
