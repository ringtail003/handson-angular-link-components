import { NgModule } from '@angular/core';
import { BudgetSchedulerComponent } from './budget-scheduler/budget-scheduler.component';
import { SharedComponentModule } from 'src/app/shared/components/module';

@NgModule({
  declarations: [
    BudgetSchedulerComponent,
  ],
  imports: [
    SharedComponentModule,
  ],
  exports: [
    BudgetSchedulerComponent,
  ],
})
export class BudgetPageWidgetComponentModule {}