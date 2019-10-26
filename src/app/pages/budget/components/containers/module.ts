import { NgModule } from "@angular/core";
import { AccountBudgetsEditorComponent } from './budgeted-account-selector/account-budgets-editor.component';
import { UnitComponentModule } from '../units';

@NgModule({
  declarations: [
    AccountBudgetsEditorComponent,
  ],
  imports: [
    UnitComponentModule,
  ],
  exports: [
    AccountBudgetsEditorComponent,
  ],
})
export class SharedContainerComponentModule {}