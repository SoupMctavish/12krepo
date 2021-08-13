import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { SellersModule } from './sellers/sellers.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'avatars')
    }),
    ItemsModule,
    SellersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
