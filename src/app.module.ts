import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module'
import { Item } from './item/item.entity';

const configValidationSchema = Joi.object({
  PLAYGROUND: Joi.bool().default(true),
  NODE_ENV: Joi.string()
    .default('development'),
  PORT: Joi.number().default(3000),
  DATABASE_TYPE: Joi.string().valid('postgres', 'mysql'),
});

const database = TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT),
    ssl: {
      rejectUnauthorized: false,
    },
    synchronize: false,
    entities: [Item],
    // logger: 'advanced-console',
    // logging: true,
  }),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: process.env.GQL_PLAYGROUND === 'true',
      debug: process.env.GQL_DEBUG === 'true',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      include: [
        ItemModule
      ],
    }),
    ItemModule,
    database,
  ],
})
export class AppModule { }

