import { BigNumber } from 'bignumber.js';

export class MoneyEntity {
  constructor(private readonly _amount: BigNumber) {
  }

  static ZERO(): MoneyEntity {
    return new MoneyEntity(new BigNumber(0));
  }

  static of(value: number): MoneyEntity {
    return new MoneyEntity(new BigNumber(value));
  }


  static add(a: MoneyEntity, b: MoneyEntity): MoneyEntity {
    return new MoneyEntity(a.amount.plus(b.amount));
  }

  negate(): MoneyEntity {
    return new MoneyEntity(this.amount.negated());
  }

  get amount(): BigNumber {
    return this._amount;
  }

  isPositiveOrZero = (): boolean => this.amount.comparedTo(0) >= 0;

}
