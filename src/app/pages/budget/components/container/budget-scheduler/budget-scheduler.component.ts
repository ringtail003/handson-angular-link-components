import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account';
import { AccountRepository, BudgetScheduleRepository } from '../../../services';
import { BudgetSchedule } from '../../../models/budget-schedule';

@Component({
  selector: 'budget-scheduler',
  templateUrl: './budget-scheduler.component.html',
  styleUrls: []
})
export class BudgetSchedulerComponent implements OnInit {
  accounts: Account[] = [];
  budgetSchedule: BudgetSchedule = null;

  constructor(
    private accountRepository: AccountRepository,
    private budgetScheduleRepository: BudgetScheduleRepository,
  ) { }

  ngOnInit() {
    this.accountRepository
      .getList$()
      .subscribe(accounts => this.accounts = accounts)
    ;

    this.budgetScheduleRepository
      .get$()
      .subscribe(budgetSchedule => this.budgetSchedule = budgetSchedule)
    ;
  }

  handleSave(budgetSchedule: BudgetSchedule) {
    this.budgetScheduleRepository
      .save$(budgetSchedule)
      .subscribe(budgetSchedule => this.budgetSchedule = budgetSchedule)
    ;
  }

}
