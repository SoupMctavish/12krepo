import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  providers: [ItemsService],
  controllers: [
    ItemsController
  ],
  imports: [
    TypeOrmModule.forFeature([
      ItemEntity
    ])
  ]
})
export class ItemsModule {}
