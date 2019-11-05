import { Term } from './term';
import { Budget } from './budget';

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