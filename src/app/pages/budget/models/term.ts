export type Term = {
  start: Date;
  end: Date;
}

export function factory(start, end): Term {
  return { start, end };
}