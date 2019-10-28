import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBudgetsSheetComponent } from './account-budgets-sheet';
import { UnitComponentModule } from '..';

describe('AccountBudgetsSheetComponent', () => {
  let component: AccountBudgetsSheetComponent;
  let fixture: ComponentFixture<AccountBudgetsSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UnitComponentModule ],
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
