import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { BudgetSchedule } from '../../../types/budget-schedule';
import { FormArray } from '@angular/forms';
import { formBuilder, Form } from './form';

@Component({
  selector: 'budget-schedule-editor',
  templateUrl: './budget-schedule-editor.component.html',
  styleUrls: ['./budget-schedule-editor.component.scss'],
})
export class BudgetScheduleEditorComponent implements OnInit, OnChanges {
  @Input() accounts: Account[] = [];
  @Input() budgetSchedule: BudgetSchedule = null;
  @Output() onSave = new EventEmitter<BudgetSchedule>();

  labels = {
    save: '保存'
  } as const;

  $form: Form = null;

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: { budgetSchedule?: SimpleChange }) {
    if (!changes.budgetSchedule) {
      return;
    }

    this.$form = formBuilder(this.budgetSchedule);
  }

  handleAccountPicked(account: Account) {
    this.$form.addBudget(account);
  }

  handleAccountDelete(account: Account) {
    this.$form.removeBudget(account);
  }

  handleSaveAction() {
    this.onSave.emit(this.$form.value);
  }

}