import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import * as CustomValidators from '../../../validators';
import { BudgetSchedule, Budget } from '../../../models/budget-schedule';
import { Account } from '../../../models/account';

export class Form extends FormGroup {
  get $budgets() {
    return this.get('budgets') as FormArray;
  }

  addBudget(account: Account) {
    if (this.$budgets.getRawValue().find(item => item.account.code === account.code)) {
      return;
    }

    this.$budgets.push(budgetBuilder.build({ account, amount: 0 }));
  }

  removeBudget(account: Account) {
    this.$budgets.removeAt(
      this.$budgets.getRawValue().findIndex(item => item.account.code === account.code)
    );
  }

  hasError(name: string, validationKey: string): boolean {
    return (this.controls[name].errors || {})[validationKey] || false;
  }
}

export const formBuilder = {
  build: (model: BudgetSchedule) => {
    return new Form({
      name: new FormControl(
        model.name,
        Validators.required,
      ),
      term: new FormGroup({
        start: new FormControl(
          model.term.start,
          Validators.required,
        ),
        end: new FormControl(
          model.term.end,
          Validators.required,
        ),
      }, {
        validators: CustomValidators.termRange,
      }),
      budgets: new FormArray(
        model.budgets.map(budget => budgetBuilder.build(budget)),
        CustomValidators.arrayLength,
      ),
    });
  }
};

const budgetBuilder = {
  build: (model: Budget) => {
    return new FormGroup({
      account: new FormGroup({
        code: new FormControl(model.account.code),
        name: new FormControl(model.account.name),
      }),
      amount: new FormControl(model.amount),
    });
  }
};