import { Component, OnInit } from '@angular/core';
import { AccountRepository } from 'src/app/shared/services/account-repository';
import { Account } from 'src/app/shared/types/account';

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
