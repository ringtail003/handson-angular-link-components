import { FormGroup, FormArray } from '@angular/forms';

export type forGroup = ($group: FormGroup) => {[key: string]: any} | null;
export type forArray = ($array: FormArray) => {[key: string]: any} | null;

export const Result = {
  noValidate: null,
  valid: null,
  invalid: key => ({ key: true }),
};

export function get<T>(key, $form: FormGroup): T;
export function get<T>(key, $form: FormArray): T[];
export function get<T>(key, $form: any): any {
  if ($form instanceof FormGroup) {
    return $form.get(key).value;
  }

  if ($form instanceof FormArray) {
    return $form.value;
  }

  throw new Error(`Unsupported type ${$form}`);
}