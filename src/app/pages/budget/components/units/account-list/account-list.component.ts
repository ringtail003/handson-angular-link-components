import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { BudgetedAccount } from '../../../types/budgeted-account';
import { ArrayCopy } from 'src/app/shared/utils';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit, OnChanges {
  @Input() accounts: BudgetedAccount[] = [];
  @Output() onAccountDelete = new EventEmitter<Account>();
  @Output() onBudgetChanged = new EventEmitter<Account>();

  input: BudgetedAccount[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { accounts?: SimpleChange }) {
    if (!changes.accounts) {
      return;
    }

    this.input = ArrayCopy(changes.accounts.currentValue);
  }

  onDelete(account: Account) {
    this.onAccountDelete.emit(account);
  }

  onChanged(account: Account) {
    this.onBudgetChanged.emit(account);
  }

}
