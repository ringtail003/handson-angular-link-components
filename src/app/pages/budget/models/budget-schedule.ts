import { Term } from './term';
import { Account } from './account';

export class BudgetSchedule {
  public readonly id?: number;
  public readonly name: string;
  public readonly term: Term;
  public readonly budgets: Budget[];

  constructor(
    args?: {
      id?: number;
      name?: string;
      term?: Term;
      budgets?: Budget[];
    }
  ) {
    const _args = args || {};
    this.name = _args.name || null;
    this.term = _args.term || new Term();
    this.budgets = _args.budgets || [];
  }
};

export class Budget{
  public account: Account;
  public amount: number;

  constructor(
    args?: {
      account?: Account;
      amount?: number;
    }
  ) {
    const _args = args || {};
    this.account = _args.account || new Account();
    this.amount = _args.amount || null;
  }
}