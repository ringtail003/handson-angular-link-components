import { Account } from './account';

export type BudgetedAccount = Account & {
  budget: number;
};

export function toBudgetedAccount(account): BudgetedAccount {
  return { ...account,
    budget: 0,
  };
}