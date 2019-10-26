import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  @Input() $form: FormGroup = null;
  @Input() name: string = null;
  @Output() onAccountDelete = new EventEmitter<Account>();

  constructor() { }

  ngOnInit() {
  }

  get budgets() {
    return this.$form.get('budgets') as FormArray;
  }

  handleDelete(account: Account) {
    this.onAccountDelete.emit(account);
  }

}
