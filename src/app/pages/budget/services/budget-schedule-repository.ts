import { Injectable } from "@angular/core";
import * as Rx from 'rxjs';
import { BudgetSchedule } from '../models/budget-schedule';

@Injectable({
  providedIn: 'root',
})
export class BudgetScheduleRepository {
  private budgetSchedule = new BudgetSchedule();

  get$(): Rx.Observable<BudgetSchedule> {
    return new Rx.Observable(subscriber =>
      subscriber.next(this.budgetSchedule)
    );
  }

  save$(value: BudgetSchedule): Rx.Observable<BudgetSchedule> {
    this.budgetSchedule = { id: 1, ...value  };
    console.info(this.budgetSchedule);

    return new Rx.Observable(subscriber =>
      subscriber.next(this.budgetSchedule)
    );
  }
}