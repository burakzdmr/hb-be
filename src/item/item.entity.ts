import { PrimaryColumn, Column, Entity } from 'typeorm';
import { ObjectType, Int, Field } from '@nestjs/graphql';
import { number } from 'joi';

@ObjectType()
@Entity({ name: 'items' })
export class Item {

  @PrimaryColumn()
  @Field(() => Int, { defaultValue: 0 })
  id?: number;

  @Column()
  @Field(() => String, { defaultValue: '' })
  name?: string;

  @Column()
  @Field(() => String, { defaultValue: '' })
  imageurl?: string;

  @Column()
  @Field(() => String, { defaultValue: '' })
  brand?: string;

  @Column()
  @Field(() => String, { defaultValue: '' })
  color?: string;

  @Column()
  @Field(() => Number, { defaultValue: 0 })
  price?: number;

  @Column()
  @Field(() => Number, { defaultValue: 0 })
  oldprice?: number;

  @Column()
  @Field(() => Number, { defaultValue: 0 })
  changepercent?: number;

  @Column()
  @Field(() => String, { defaultValue: '' })
  createddate?: string;
}
