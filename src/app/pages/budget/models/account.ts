export class Account {
  public readonly code: string;
  public readonly name: string;

  constructor(
    args?: {
      code?: string;
      name?: string;
    }
  ) {
    const _args = args || {};
    this.code = _args.code || name;
    this.name = _args.name || null;
  }
};