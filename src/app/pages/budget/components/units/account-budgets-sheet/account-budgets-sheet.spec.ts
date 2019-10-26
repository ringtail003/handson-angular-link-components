import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBudgetsSheetComponent } from './account-budgets-sheet';

describe('AccountBudgetsSheetComponent', () => {
  let component: AccountBudgetsSheetComponent;
  let fixture: ComponentFixture<AccountBudgetsSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBudgetsSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBudgetsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
