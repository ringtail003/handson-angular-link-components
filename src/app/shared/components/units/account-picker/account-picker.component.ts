import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/shared/types/account';

@Component({
  selector: 'account-picker',
  templateUrl: './account-picker.component.html',
  styleUrls: ['./account-picker.component.scss']
})
export class AccountPickerComponent implements OnInit {
  @Input() accounts: Account[] = [];

  constructor() { }

  ngOnInit() {
  }

}
