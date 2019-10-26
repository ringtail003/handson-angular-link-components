import * as Validator from './utils';

const ValidationName = 'termRange';

export const validator: Validator.forGroup = ($group) => {
  const start = Validator.get<Date>('start', $group);
  const end = Validator.get<Date>('end', $group);

  if (!start || !end) {
    return Validator.Result.noValidate;
  }

  return start <= end ?
    Validator.Result.valid :
    Validator.Result.invalid(ValidationName)
  ;
};