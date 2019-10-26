import * as Validator from './utils';

const ValidationName = 'arrayLength';

export const validator: Validator.forArray = ($array) => {
  const array = Validator.get<any>('budgets', $array);

  if (!array) {
    return Validator.Result.noValidate;
  }

  return array.length ?
    Validator.Result.valid : 
    Validator.Result.invalid(ValidationName)
  ;
};