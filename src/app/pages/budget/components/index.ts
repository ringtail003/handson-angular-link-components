import { NgModule } from '@angular/core';
import { UnitComponentModule } from './units';
import { ContainerComponentModule } from './containers';
import { FormComponentModule } from './forms';
import { WidgetComponentModule } from './widgets';

@NgModule({
  exports: [
    UnitComponentModule,
    ContainerComponentModule,
    FormComponentModule,
    WidgetComponentModule,
  ],
})
export class SharedComponentModule {}