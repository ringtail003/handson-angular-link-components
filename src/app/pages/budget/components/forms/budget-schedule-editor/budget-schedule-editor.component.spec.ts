import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateTime } from 'luxon';

import { BudgetScheduleEditorComponent } from './budget-schedule-editor.component';
import { FormComponentModule } from '..';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('BudgetScheduleEditorComponent', () => {
  let component: BudgetScheduleEditorComponent;
  let fixture: ComponentFixture<BudgetScheduleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormComponentModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetScheduleEditorComponent);
    component = fixture.componentInstance;
    const budgetSchedule = {
      name: 'foo',
      term: {
        start: DateTime.fromISO('2019-11-01').toJSDate(),
        end: DateTime.fromISO('2019-11-01').toJSDate(),
      },
      budgets: [],
    };
    component.budgetSchedule = budgetSchedule;
    component.ngOnChanges({ budgetSchedule: { currentValue: budgetSchedule } } as any);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
