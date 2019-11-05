import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '../../models/account';

@Pipe({
  name: 'orderByAccount'
})
export class OrderByAccountPipe implements PipeTransform {

  transform(values: Account[], ...args: any[]): any {
    return values.sort((a, b) => {
      return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
    });
  }

}