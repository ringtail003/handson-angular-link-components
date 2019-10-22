import { Component, OnInit } from '@angular/core';
import { Account } from '../../../types/account';
import { AccountRepository } from '../../../services';

@Component({
  selector: 'budget-scheduler',
  templateUrl: './budget-scheduler.component.html',
  styleUrls: []
})
export class BudgetSchedulerComponent implements OnInit {
  accounts: Account[] = [];

  constructor(
    private accountRepository: AccountRepository,
  ) { }

  ngOnInit() {
    this.accountRepository
      .getList$()
      .subscribe(accounts => this.accounts = accounts);
  }

}
