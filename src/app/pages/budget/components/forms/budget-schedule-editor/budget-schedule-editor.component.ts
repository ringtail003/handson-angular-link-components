import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Account } from 'src/app/pages/budget/models/account';
import { BudgetSchedule } from '../../../models/budget-schedule';
import { formBuilder, Form } from './form';
import { FormGroup } from '@angular/forms';

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
    this.build();
  }

  ngOnChanges(changes: { budgetSchedule?: SimpleChange }) {
    if (!changes.budgetSchedule) {
      return;
    }
    this.build();
  }

  private build() {
    this.$form = formBuilder.build(this.budgetSchedule);
  }

  handleAccountPicked(account: Account) {
    this.$form.addBudget(account);
    this.accounts = this.accounts.filter(item => item.code !== account.code);
  }

  handleAccountDelete(account: Account) {
    this.$form.removeBudget(account);
    this.accounts = this.accounts.concat(account);
  }

  handleSaveAction() {
    this.onSave.emit(this.$form.value);
  }

}