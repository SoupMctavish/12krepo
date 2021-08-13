import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from './item.entity';

@Injectable()
export class ItemsService {

    constructor(@InjectRepository(ItemEntity) private rep:Repository<ItemEntity>){

    }

    async getAllItems(): Promise<ItemEntity[]> {
        return await this.rep.find();
    }

    async getItem(_id:number): Promise<ItemEntity[]> {
        return await this.rep.findByIds([
            _id
        ])
    }

    async createItem(item: ItemEntity) {
        await this.rep.insert(item);
    }

    async updateItem(item: ItemEntity) {
        await this.rep.update({ id_game:item.id_game }, item);
    }

    async deleteItem(item: ItemEntity){
        await this.rep.delete(item);
    }
}
