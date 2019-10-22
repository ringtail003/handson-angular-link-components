import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetedAccountSelectorComponent } from './budgeted-account-selector.component';

describe('BudgetedAccountSelectorComponent', () => {
  let component: BudgetedAccountSelectorComponent;
  let fixture: ComponentFixture<BudgetedAccountSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetedAccountSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetedAccountSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
