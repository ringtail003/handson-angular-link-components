import { NgModule } from '@angular/core';
import { SharedUnitComponentModule } from './units/module';
import { SharedContainerComponentModule } from './containers/module';

@NgModule({
  exports: [
    SharedUnitComponentModule,
    SharedContainerComponentModule,
  ],
})
export class SharedComponentModule {}