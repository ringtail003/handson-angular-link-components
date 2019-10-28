import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetScheduleEditorComponent } from './budget-schedule-editor.component';
import { FormComponentModule } from '..';

describe('BudgetScheduleEditorComponent', () => {
  let component: BudgetScheduleEditorComponent;
  let fixture: ComponentFixture<BudgetScheduleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormComponentModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetScheduleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
