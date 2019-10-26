import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBudgetsEditorComponent } from './account-budgets-editor.component';

describe('AccountBudgetsEditorComponent', () => {
  let component: AccountBudgetsEditorComponent;
  let fixture: ComponentFixture<AccountBudgetsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBudgetsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBudgetsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
