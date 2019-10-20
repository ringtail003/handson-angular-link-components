import { NgModule } from '@angular/core';
import { BudgetPageComponentModule } from './budget/module';

@NgModule({
  exports: [
    BudgetPageComponentModule,
  ],
})
export class PageComponentModule {}