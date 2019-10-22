import { NgModule } from "@angular/core";
import { UnitComponentModule } from '../units';
import { BudgetScheduleEditorComponent } from './budget-schedule-editor/budget-schedule-editor.component';
import { ContainerComponentModule } from '../containers';

@NgModule({
  declarations: [
    BudgetScheduleEditorComponent,
  ],
  imports: [
    UnitComponentModule,
    ContainerComponentModule,
  ],
  exports: [
    BudgetScheduleEditorComponent,
  ],
})
export class FormComponentModule {}