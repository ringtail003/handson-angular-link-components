import { Account } from './account';

export class Budget {
  private _account: Account;
  private _amount: number;

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

  set account(value: Account) {
    this._account = value;

    if (!value) {
      this._amount = null;
    }
  }

  set amount (value: number) {
    if (!this.account) {
      throw new Error('amount cannot be set because Budget do not have account.');
    }

    this._amount = value;
  }
}