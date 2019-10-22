import { Term } from './term';
import { Account } from './account';

export type BudgetSchedule = {
  id?: number;
  term: Term;
  accounts: Account[];
};