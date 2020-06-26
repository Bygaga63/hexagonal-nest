import { AccountId } from '../../entitites/account.entity';
import { MoneyEntity } from '../../entitites/money.entity';

export interface GetAccountBalanceQuery {
  getAccountBalance(accountId: AccountId): Promise<MoneyEntity>;
}