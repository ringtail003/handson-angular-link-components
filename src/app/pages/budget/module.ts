import { NgModule } from '@angular/core';
import { BudgetComponent } from './budget.component';
import { SharedModule } from '../../shared/module';
import { BudgetPageWidgetComponentModule } from './components/widgets/module';

@NgModule({
  declarations: [
    BudgetComponent,
  ],
  imports: [
    SharedModule,
    BudgetPageWidgetComponentModule,
  ],
  exports: [
    BudgetComponent,
  ],
})
export class BudgetPageComponentModule {}