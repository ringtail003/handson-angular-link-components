import { FormGroup } from '@angular/forms';

export type Fn = (fg: FormGroup) => {[key: string]: any} | null;

export const Result = {
  noValidate: null,
  valid: null,
  invalid: true,
};

export function get<T>(key, fg: FormGroup): T {
  return fg.get(key).value;
}