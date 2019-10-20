import { NgModule } from '@angular/core';
import { AccountPickerComponent } from './account-picker/account-picker.component';

@NgModule({
  declarations: [
    AccountPickerComponent,
  ],
  exports: [
    AccountPickerComponent,
  ],
})
export class SharedUnitComponentModule {}