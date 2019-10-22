import { NgModule } from "@angular/core";
import { UnitComponentModule } from '../units';
import { BudgetScheduleEditorComponent } from './budget-schedule-editor/budget-schedule-editor.component';
import { ContainerComponentModule } from '../containers';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BudgetScheduleEditorComponent,
  ],
  imports: [
    UnitComponentModule,
    ContainerComponentModule,
    CommonModule,
  ],
  exports: [
    BudgetScheduleEditorComponent,
  ],
})
export class FormComponentModule {}