import { NgModule } from '@angular/core';
import { SharedComponentModule } from './components/module';

@NgModule({
  exports: [
    SharedComponentModule,
  ],
})
export class SharedModule {}