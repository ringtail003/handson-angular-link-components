import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'account-budgets-sheet',
  templateUrl: './account-budgets-sheet.component.html',
  styleUrls: ['./account-budgets-sheet.component.scss'],
})
export class AccountBudgetsSheetComponent implements OnInit {
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
