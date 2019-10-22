import { Term } from './term';
import { BudgetedAccount } from './budgeted-account';

export type BudgetSchedule = {
  id?: number;
  name: string;
  term: Term;
  accounts: BudgetedAccount[];
};