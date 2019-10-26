import { Term } from './term';
import { Account } from './account';

export type BudgetSchedule = {
  id?: number;
  name: string;
  term: Term;
  budgets: Budget[];
};

export type Budget = {
  account: Account;
  amount: number;
}