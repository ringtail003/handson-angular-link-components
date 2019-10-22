import { NgModule } from '@angular/core';
import { AccountPickerComponent } from './account-picker/account-picker.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TermEditorComponent } from './term-editor/term-editor.component';
import { SimpleActionButtonComponent } from './simple-action-button/simple-action-button.component';

@NgModule({
  declarations: [
    AccountPickerComponent,
    AccountListComponent,
    TermEditorComponent,
    SimpleActionButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AccountPickerComponent,
    AccountListComponent,
    TermEditorComponent,
    SimpleActionButtonComponent,
  ],
})
export class UnitComponentModule {}