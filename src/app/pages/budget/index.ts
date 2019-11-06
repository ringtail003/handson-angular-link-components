import { NgModule } from '@angular/core';
import { BudgetComponent } from './budget.component';
import { SharedModule } from '../../shared/module';
import { WidgetComponentModule } from './components/container';

@NgModule({
  declarations: [
    BudgetComponent,
  ],
  imports: [
    SharedModule,
    WidgetComponentModule,
  ],
  exports: [
    BudgetComponent,
  ],
})
export class BudgetComponentModule {}