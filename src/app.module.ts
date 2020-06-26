import { Module } from '@nestjs/common';
import {join} from "path";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountWebModule } from './modules/account-web/account-web.module';
import { AccountPersistenceModule } from './modules/account-persistence/account-persistence.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'data', 'data.sqlite'),
      logging: true,
      autoLoadEntities: true
    }),
    AccountPersistenceModule,
    AccountWebModule
  ],
})
export class AppModule {}
