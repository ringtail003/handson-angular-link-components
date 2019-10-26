import { NgModule } from "@angular/core";
import { UnitComponentModule } from '../units';
import { BudgetScheduleEditorComponent } from './budget-schedule-editor/budget-schedule-editor.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BudgetScheduleEditorComponent,
  ],
  imports: [
    UnitComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BudgetScheduleEditorComponent,
  ],
})
export class FormComponentModule {}