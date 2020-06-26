import { AccountEntity, AccountId } from './account.entity';
import { MoneyEntity } from './money.entity';
import { ActivityEntity } from './activity.entity';

export class ActivityWindowEntity {
  private readonly _activities: ActivityEntity[] = [];


  get activities(): ActivityEntity[] {
    return this._activities;
  }

  addActivity(activity: ActivityEntity){
    this.activities.push(activity);
    return this;
  }


  public calculateBalance(accountId: AccountId): MoneyEntity {
    const depositBalance = this.activities
      .filter(activity => activity.targetAccountId === accountId)
      .map(activity => activity.money)
      .reduce(MoneyEntity.add, MoneyEntity.ZERO());

    const withdrawBalance = this.activities
      .filter(activity => activity.sourceAccountId === accountId)
      .map(activity => activity.money)
      .reduce(MoneyEntity.add, MoneyEntity.ZERO());


    return MoneyEntity.add(depositBalance, withdrawBalance.negate());
  }
}