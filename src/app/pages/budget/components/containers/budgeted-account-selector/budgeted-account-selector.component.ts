import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { BudgetedAccount, toBudgetedAccount } from '../../../types/budgeted-account';

@Component({
  selector: 'budgeted-account-selector',
  templateUrl: './budgeted-account-selector.component.html',
  styleUrls: []
})
export class BudgetedAccountSelectorComponent implements OnInit {
  @Input() accounts: Account[] = [];
  @Output() onBudgetAccountsChanged = new EventEmitter<BudgetedAccount[]>();

  selectableAccounts: Account[] = [];
  budgetedAccounts: BudgetedAccount[] = [];

  constructor() { }

  ngOnInit() {
    this.selectableAccounts = this.accounts;
  }

  handleAccountPicked(account: Account) {
    this.budgetedAccounts = this.budgetedAccounts.concat(toBudgetedAccount(account));
    this.selectableAccounts = this.excludes(this.accounts, this.budgetedAccounts);
    this.emit();
  }

  handleAccountDelete(account: BudgetedAccount) {
    this.budgetedAccounts = this.remove(this.budgetedAccounts, account);
    this.selectableAccounts = this.excludes(this.accounts, this.budgetedAccounts);
    this.emit();
  }

  handleBudgetChanged(account) {
    this.budgetedAccounts.find(item => item.code === account.code).budget = account.budget;
    this.emit();
  }

  private remove(list, target) {
    return list.filter(item => item.code != target.code);
  }

  private excludes(sources, excludes) {
    return sources.filter(source => !excludes.find(exclude => source.code === exclude.code));
  }

  private emit() {
    this.onBudgetAccountsChanged.emit(this.budgetedAccounts);
  }

}