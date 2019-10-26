import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit, OnChanges {
  @Input() $form: FormGroup = null;
  @Output() onAccountDelete = new EventEmitter<Account>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { accounts?: SimpleChange }) {
    if (!changes.accounts) {
      return;
    }
  }

  get budgets() {
    return this.$form.get('budgets') as FormArray;
  }

  handleDelete(account: Account) {
    this.onAccountDelete.emit(account);
  }

}
