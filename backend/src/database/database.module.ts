import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
                type: 'postgres',

                host: configService.getOrThrow<string>('DB_HOST'),
                port: Number(configService.getOrThrow<string>('DB_PORT')),

                username: configService.getOrThrow<string>('DB_USERNAME'),
                password: configService.getOrThrow<string>('DB_PASSWORD'),
                database: configService.getOrThrow<string>('DB_DATABASE'),

                autoLoadEntities: true,

                synchronize: true,
                logging: true,
            }),

            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
