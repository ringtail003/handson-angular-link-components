import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/pages/budget/models/account';

@Component({
  selector: 'account-picker',
  templateUrl: './account-picker.component.html',
  styleUrls: ['./account-picker.component.scss']
})
export class AccountPickerComponent implements OnInit {
  @Input() accounts: Account[] = [];
  @Output() onAccountPicked = new EventEmitter<Account>();

  picked: Account = null;

  constructor() { }

  ngOnInit() {
  }

  handleChanged() {
    this.onAccountPicked.emit(this.picked);
  }

}
