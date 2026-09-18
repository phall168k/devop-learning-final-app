import dotenv from 'dotenv';
import { DataSource, type DataSourceOptions } from 'typeorm';
import { type SeederOptions } from 'typeorm-extension';

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  // migrations: [__dirname + '/migrations/admin/*{.ts,.js}'],
  migrations: [
    __dirname + '/migrations/admin/*{.ts,.js}',
  ],
  // seeds: ['src/database/seeds/main.seed.ts'],
  seeds: [
    __dirname + '/seeds/main.seed{.ts,.js}',
  ],
  logging: true,
  synchronize: false,
};

export const AppDataSource = new DataSource(options);