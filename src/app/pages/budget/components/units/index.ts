import { NgModule } from '@angular/core';
import { AccountPickerComponent } from './account-picker/account-picker.component';
import { AccountBudgetsSheetComponent } from './account-budgets-sheet/account-budgets-sheet';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermEditorComponent } from './term-editor/term-editor.component';
import { SimpleActionButtonComponent } from './simple-action-button/simple-action-button.component';
import { SimpleLineInputComponent } from './simple-line-input/simple-line-input.component';
import { PagePipeModule } from '../../pipes';

@NgModule({
  declarations: [
    AccountPickerComponent,
    AccountBudgetsSheetComponent,
    TermEditorComponent,
    SimpleActionButtonComponent,
    SimpleLineInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagePipeModule,
  ],
  exports: [
    AccountPickerComponent,
    AccountBudgetsSheetComponent,
    TermEditorComponent,
    SimpleActionButtonComponent,
    SimpleLineInputComponent,
  ],
})
export class UnitComponentModule {}