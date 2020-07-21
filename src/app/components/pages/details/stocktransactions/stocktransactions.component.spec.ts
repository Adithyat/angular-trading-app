import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransactionsComponent } from './stocktransactions.component';

describe('StocktransactionsComponent', () => {
  let component: StocktransactionsComponent;
  let fixture: ComponentFixture<StocktransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
