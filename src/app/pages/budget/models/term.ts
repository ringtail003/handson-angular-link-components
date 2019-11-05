export class Term {
  public readonly start;
  public readonly end;

  constructor(
    args?: {
      start?: Date;
      end?: Date;
    }
  ) {
    const _args = args || {};
    this.start = _args.start || null;
    this.end = _args.end || null;
  }
}