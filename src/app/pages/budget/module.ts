import { NgModule } from '@angular/core';
import { BudgetComponent } from './budget.component';
import { SharedModule } from '../../shared/module';

@NgModule({
  declarations: [
    BudgetComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    BudgetComponent,
  ],
})
export class BudgetPageComponentModule {}