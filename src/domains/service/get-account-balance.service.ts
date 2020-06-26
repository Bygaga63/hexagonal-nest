import { GetAccountBalanceQuery } from '../ports/in/get-account-balance.query';
import { AccountId } from '../entitites/account.entity';
import { LoadAccountPort } from '../ports/out/load-account.port';

export class GetAccountBalanceService implements GetAccountBalanceQuery{
  constructor(
    private readonly _loadAccountPort: LoadAccountPort
  ) {
  }

  async getAccountBalance(accountId: AccountId) {
    const account =  await this._loadAccountPort.loadAccount(accountId)
    return account.calculateBalance();
  }

}