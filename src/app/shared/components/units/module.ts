import { NgModule } from '@angular/core';
import { AccountPickerComponent } from './account-picker/account-picker.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AccountPickerComponent,
    AccountListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AccountPickerComponent,
    AccountListComponent,
  ],
})
export class SharedUnitComponentModule {}