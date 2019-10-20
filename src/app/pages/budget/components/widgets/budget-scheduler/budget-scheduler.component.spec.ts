import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSchedulerComponent } from './budget-scheduler.component';

describe('BudgetSchedulerComponent', () => {
  let component: BudgetSchedulerComponent;
  let fixture: ComponentFixture<BudgetSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
