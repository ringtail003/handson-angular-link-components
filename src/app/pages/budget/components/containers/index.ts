import { NgModule } from '@angular/core';
import { BudgetedAccountSelectorComponent } from './budgeted-account-selector/budgeted-account-selector.component';
import { UnitComponentModule } from '../units';

@NgModule({
  declarations: [
    BudgetedAccountSelectorComponent,
  ],
  imports: [
    UnitComponentModule,
  ],
  exports: [
    BudgetedAccountSelectorComponent,
  ],
})
export class ContainerComponentModule {}