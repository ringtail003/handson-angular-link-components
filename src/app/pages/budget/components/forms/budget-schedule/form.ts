import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import * as CustomValidators from '../../../validators';
import { BudgetSchedule } from '../../../models/budget-schedule';
import { Budget } from '../../../models/budget';
import { Account } from '../../../models/account';

export class Form extends FormGroup {
  get $budgets() {
    return this.get('budgets') as FormArray;
  }

  findBudgetIndex(account: Account): number {
    return this.$budgets.getRawValue().findIndex(item => item.account.code === account.code);
  }

  addBudget(account: Account) {
    if (this.findBudgetIndex(account) !== -1) {
      return;
    }

    this.$budgets.push(budgetBuilder.build(new Budget({ account, amount: 0 })));
  }

  removeBudget(account: Account) {
    const index = this.findBudgetIndex(account);

    if (index === -1) {
      throw new Error('account not found in budgets.');
    }

    this.$budgets.removeAt(
      this.findBudgetIndex(account)
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