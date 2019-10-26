import { NgModule } from '@angular/core';
import { OrderByAccountPipe } from './order-by-account/order-by-account.pipe';

@NgModule({
  declarations: [
    OrderByAccountPipe,
  ],
  exports: [
    OrderByAccountPipe,
  ],
})
export class PagePipeModule {}