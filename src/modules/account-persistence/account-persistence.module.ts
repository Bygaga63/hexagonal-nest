import { Global, Module } from '@nestjs/common';
import { AccountPersistenceAdapter } from './account-persistence.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityOrmEntity } from './activity.orm-entity';
import { SendMoneyUseCaseSymbol } from '../../domains/ports/in/send-money.use-case';
import { SendMoneyService } from '../../domains/service/send-money.service';
import { AccountOrmEntity } from './account.orm-entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity]),
  ],
  providers: [
    AccountPersistenceAdapter,
    {
      provide: SendMoneyUseCaseSymbol,
      useFactory: (accountPersistenceAdapter) => {
        return new SendMoneyService(accountPersistenceAdapter, accountPersistenceAdapter);
      },
      inject: [AccountPersistenceAdapter],
    },
  ],
  exports: [SendMoneyUseCaseSymbol]
})
export class AccountPersistenceModule {
}