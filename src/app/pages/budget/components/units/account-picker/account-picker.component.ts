import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';

@Component({
  selector: 'account-picker',
  templateUrl: './account-picker.component.html',
  styleUrls: ['./account-picker.component.scss']
})
export class AccountPickerComponent implements OnInit {
  @Input() accounts: Account[] = [];
  @Output() onAccountPicked = new EventEmitter<Account>();

  chosen: Account = null;

  constructor() { }

  ngOnInit() {
  }

  onChanged() {
    this.onAccountPicked.emit(this.chosen);
  }

}
