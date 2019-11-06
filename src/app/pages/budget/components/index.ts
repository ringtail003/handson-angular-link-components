import { NgModule } from '@angular/core';
import { FormElementComponentModule } from './form-elements';
import { FormComponentModule } from './forms';
import { WidgetComponentModule } from './container';

@NgModule({
  exports: [
    FormElementComponentModule,
    FormComponentModule,
    WidgetComponentModule,
  ],
})
export class SharedComponentModule {}