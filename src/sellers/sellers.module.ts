import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerEntity } from './seller.entity';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';

@Module({
  providers: [SellersService],
  controllers: [
    SellersController
  ],
  imports: [
    TypeOrmModule.forFeature([
      SellerEntity
    ])
  ]
})
export class SellersModule {}
