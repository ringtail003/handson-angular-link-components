import { NgModule } from '@angular/core';
import { AccountPickerComponent } from './account-picker/account-picker.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TermEditorComponent } from './term-editor/term-editor.component';

@NgModule({
  declarations: [
    AccountPickerComponent,
    AccountListComponent,
    TermEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AccountPickerComponent,
    AccountListComponent,
    TermEditorComponent,
  ],
})
export class UnitComponentModule {}