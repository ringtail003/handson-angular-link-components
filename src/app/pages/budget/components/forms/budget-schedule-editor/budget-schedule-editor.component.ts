import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { Term } from '../../../types/term';
import { BudgetSchedule } from '../../../types/budget-schedule';
import { ObjectCopy } from 'src/app/shared/utils';
import { BudgetedAccount } from '../../../types/budgeted-account';

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

  constructor() { }

  ngOnInit() {
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
    this.budgetSchedule.name = name;
  }

  handleBudgetAccountsChanged(accounts: BudgetedAccount[]) {
    this.budgetSchedule.accounts = ObjectCopy(accounts);
  }

  handleSaveAction() {
    this.onSave.emit(this.budgetSchedule);
  }

}
