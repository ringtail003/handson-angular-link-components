import { NgModule } from "@angular/core";
import { BudgetedAccountSelectorComponent } from './budgeted-account-selector/budgeted-account-selector.component';
import { SharedUnitComponentModule } from '../units/module';
import { BudgetScheduleEditorComponent } from './budget-schedule-editor/budget-schedule-editor.component';

@NgModule({
  declarations: [
    BudgetedAccountSelectorComponent,
    BudgetScheduleEditorComponent,
  ],
  imports: [
    SharedUnitComponentModule,
  ],
  exports: [
    BudgetedAccountSelectorComponent,
    BudgetScheduleEditorComponent,
  ],
})
export class SharedContainerComponentModule {}