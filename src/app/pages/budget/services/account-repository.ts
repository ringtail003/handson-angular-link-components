import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { Account } from '../types/account';

@Injectable({
  providedIn: 'root',
})
export class AccountRepository {
  private accounts: Account[] = [
    { code: '111', name: 'account-1' },
    { code: '222', name: 'account-2' },
    { code: '333', name: 'account-3' },
  ];

  getList$(): Rx.Observable<Account[]> {
    return new Rx.Observable(subscriber => {
      subscriber.next(this.accounts);
    });
  }
}