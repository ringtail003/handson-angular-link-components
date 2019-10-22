import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';

@Component({
  selector: 'budgeted-account-selector',
  templateUrl: './budgeted-account-selector.component.html',
  styleUrls: []
})
export class BudgetedAccountSelectorComponent implements OnInit {
  @Input() accounts: Account[] = [];

  constructor() { }

  ngOnInit() {
  }

}
