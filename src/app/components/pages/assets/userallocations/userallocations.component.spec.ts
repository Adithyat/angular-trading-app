import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserallocationsComponent } from "./userallocations.component";

describe("UserallocationsComponent", () => {
  let component: UserallocationsComponent;
  let fixture: ComponentFixture<UserallocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserallocationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserallocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
