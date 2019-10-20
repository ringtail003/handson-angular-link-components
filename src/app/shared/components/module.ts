import { NgModule } from '@angular/core';
import { SharedUnitComponentModule } from './units/module';

@NgModule({
  exports: [
    SharedUnitComponentModule,
  ],
})
export class SharedComponentModule {}