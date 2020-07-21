import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockdetailgraphComponent } from './stockdetailgraph.component';

describe('StockdetailgraphComponent', () => {
  let component: StockdetailgraphComponent;
  let fixture: ComponentFixture<StockdetailgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockdetailgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockdetailgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
