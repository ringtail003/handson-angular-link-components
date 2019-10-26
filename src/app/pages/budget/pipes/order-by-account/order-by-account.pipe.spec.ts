import { OrderByAccountPipe } from './order-by-account.pipe';

describe('OrderByAccountPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByAccountPipe();
    expect(pipe).toBeTruthy();
  });
});
