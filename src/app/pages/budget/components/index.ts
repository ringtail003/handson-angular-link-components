import { NgModule } from '@angular/core';
import { UnitComponentModule } from './units';
import { FormComponentModule } from './forms';
import { WidgetComponentModule } from './widgets';

@NgModule({
  exports: [
    UnitComponentModule,
    FormComponentModule,
    WidgetComponentModule,
  ],
})
export class SharedComponentModule {}