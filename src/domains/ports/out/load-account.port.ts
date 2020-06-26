import { AccountEntity, AccountId } from '../../entitites/account.entity';

export interface LoadAccountPort {
  loadAccount(accountId: AccountId): Promise<AccountEntity>;
}