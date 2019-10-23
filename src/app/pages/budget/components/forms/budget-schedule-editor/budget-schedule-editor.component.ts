import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { Term } from '../../../types/term';
import { BudgetSchedule } from '../../../types/budget-schedule';
import { ObjectCopy } from 'src/app/shared/utils';
import { BudgetedAccount } from '../../../types/budgeted-account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  form: FormGroup = null;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.budgetSchedule.name, Validators.required],
    });
  }

  ngOnChanges(changes: { budgetSchedule?: SimpleChange }) {
    if (!changes.budgetSchedule) {
      return;
    }

    this.budgetSchedule = ObjectCopy(this.budgetSchedule);
  }

  handleTermChanged(term: Term) {
    this.budgetSchedule.term = ObjectCopy(term);
  }

  handleNameChanged(name: string) {
    this.budgetSchedule.name = this.getFormValue('name');
  }

  handleBudgetAccountsChanged(accounts: BudgetedAccount[]) {
    this.budgetSchedule.accounts = ObjectCopy(accounts);
  }

  handleSaveAction() {
    this.onSave.emit(this.budgetSchedule);
  }

  private getFormValue(key: string) {
    return this.form.get(key).value;
  }

}
