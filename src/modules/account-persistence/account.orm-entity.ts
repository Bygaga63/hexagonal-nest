import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Account', {})
export class AccountOrmEntity {

  @PrimaryGeneratedColumn()
  _id: number;
  @Column()
  userId: string;

}