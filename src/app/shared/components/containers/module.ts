import { NgModule } from "@angular/core";
import { BudgetedAccountSelectorComponent } from './budgeted-account-selector/budgeted-account-selector.component';
import { SharedUnitComponentModule } from '../units/module';

@NgModule({
  declarations: [
    BudgetedAccountSelectorComponent,
  ],
  imports: [
    SharedUnitComponentModule,
  ],
  exports: [
    BudgetedAccountSelectorComponent,
  ],
})
export class SharedContainerComponentModule {}