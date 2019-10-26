import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { BudgetSchedule } from '../../../types/budget-schedule';
import { ObjectCopy } from 'src/app/shared/utils';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as CustomValidators from '../../../validators';

@Component({
  selector: 'budget-schedule-editor',
  templateUrl: './budget-schedule-editor.component.html',
  styleUrls: ['./budget-schedule-editor.component.scss'],
})
export class BudgetScheduleEditorComponent implements OnInit, OnChanges {
  @Input() accounts: Account[] = [];
  @Input() budgetSchedule: BudgetSchedule = null;
  @Output() onSave = new EventEmitter<BudgetSchedule>();

  labels = {
    save: '保存'
  } as const;

  $form: FormGroup = null;

  constructor(
    private $formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.$form = this.$formBuilder.group({
      name: [this.budgetSchedule.name, Validators.required],
      term: this.$formBuilder.group({
        start: [this.budgetSchedule.term.start, Validators.required],
        end: [this.budgetSchedule.term.end, Validators.required],
      }, { validators: CustomValidators.termRange }),
      budgets: this.$formBuilder.array([], CustomValidators.arrayLength),
    });

    this.$form.valueChanges.subscribe(form => console.info('form changed:', this.$form));
  }

  ngOnChanges(changes: { budgetSchedule?: SimpleChange }) {
    if (!changes.budgetSchedule) {
      return;
    }

    this.budgetSchedule = ObjectCopy(this.budgetSchedule);
  }

  get $budgets() {
    return this.$form.get('budgets') as FormArray;
  }

  handleAccountPicked(account: Account) {
    if (this.$budgets.getRawValue().find(item => item.account.code === account.code)) {
      return;
    }

    this.$budgets.push(this.$formBuilder.group({
      account: this.$formBuilder.group({
        code: account.code,
        name: account.name,
      }),
      amount: 0,
    }));
  }

  handleAccountDelete(account: Account) {
    this.$budgets.removeAt(
      this.$budgets.getRawValue().findIndex(item => item.code === account.code)
    );
  }

  handleSaveAction() {
    this.onSave.emit(this.budgetSchedule);
  }

  hasError(name: string, validationKey: string): boolean {
    return (this.$form.controls[name].errors || {})[validationKey] || false;
  }

}
