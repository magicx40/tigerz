import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GlobalFiltersModule } from './global-filters/global-filters.module';
import OrmConfig from '../ormconfig.js';
import { ResponseModule } from './response/response.module';

@Module({
    imports: [
        UsersModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(OrmConfig),
        ResponseModule,
        GlobalFiltersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
