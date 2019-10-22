import { NgModule } from '@angular/core';
import { AccountPickerComponent } from './account-picker/account-picker.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountPickerComponent,
    AccountListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AccountPickerComponent,
    AccountListComponent,
  ],
})
export class UnitComponentModule {}