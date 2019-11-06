import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../../models/account';

@Component({
  selector: 'account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss']
})
export class AccountSelectorComponent implements OnInit {
  @Input() accounts: Account[] = [];
  @Output() onSelected = new EventEmitter<Account>();

  picked: Account = null;

  constructor() { }

  ngOnInit() {
  }

  handleChanged() {
    this.onSelected.emit(this.picked);
  }

}
