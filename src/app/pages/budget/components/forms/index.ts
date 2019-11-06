import { NgModule } from "@angular/core";
import { FormElementComponentModule } from '../form-elements';
import { BudgetScheduleEditorComponent } from './budget-schedule/budget-schedule-editor.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BudgetScheduleEditorComponent,
  ],
  imports: [
    FormElementComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BudgetScheduleEditorComponent,
  ],
})
export class FormComponentModule {}