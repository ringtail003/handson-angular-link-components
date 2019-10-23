import * as Validator from './utils';

export const validator: Validator.Fn = (fg) => {
  const start = Validator.get<Date>('start', fg);
  const end = Validator.get<Date>('end', fg);

  if (!start || !end) {
    return Validator.Result.noValidate;
  }

  return start <= end ?
    Validator.Result.valid : { termRange: Validator.Result.invalid }
  ;
};