import { NgModule } from '@angular/core';
import { AccountPickerComponent } from './account-picker/account-picker.component';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  declarations: [
    AccountPickerComponent,
    AccountListComponent,
  ],
  exports: [
    AccountPickerComponent,
    AccountListComponent,
  ],
})
export class SharedUnitComponentModule {}