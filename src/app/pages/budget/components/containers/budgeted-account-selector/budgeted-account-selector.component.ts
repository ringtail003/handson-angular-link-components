import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { BudgetedAccount, toBudgetedAccount } from '../../../types/budgeted-account';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'budgeted-account-selector',
  templateUrl: './budgeted-account-selector.component.html',
  styleUrls: []
})
export class BudgetedAccountSelectorComponent implements OnInit {
  @Input() form: FormGroup = null;
  @Input() accounts: Account[] = [];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {}

  get budgetControls() {
    return this.form.get('budgets') as FormArray;
  }

  handleAccountPicked(account: Account) {
    if (this.budgetControls.getRawValue().find(item => item.account.code === account.code)) {
      return;
    }

    this.budgetControls.push(this.fb.group({
      account: this.fb.group({
        code: account.code,
        name: account.name,
      }),
      amount: 0,
    }));
  }

  handleAccountDelete(account: BudgetedAccount) {
    this.budgetControls.removeAt(
      this.budgetControls.getRawValue().findIndex(item => item.code === account.code)
    );
  }

}