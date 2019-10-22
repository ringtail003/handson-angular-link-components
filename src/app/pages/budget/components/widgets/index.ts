import { NgModule } from '@angular/core';
import { BudgetSchedulerComponent } from './budget-scheduler/budget-scheduler.component';
import { FormComponentModule } from '../forms';

@NgModule({
  declarations: [
    BudgetSchedulerComponent,
  ],
  imports: [
    FormComponentModule,
  ],
  exports: [
    BudgetSchedulerComponent,
  ],
})
export class WidgetComponentModule {}