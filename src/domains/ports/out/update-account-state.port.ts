import { AccountEntity } from '../../entitites/account.entity';

export interface UpdateAccountStatePort {
  updateActivities(account: AccountEntity);
}