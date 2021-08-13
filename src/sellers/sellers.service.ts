import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SellerEntity } from './seller.entity';

@Injectable()
export class SellersService {

    constructor(@InjectRepository(SellerEntity) private rep:Repository<SellerEntity>) {

    }

    async getAllSellers(): Promise<SellerEntity[]> {
        return await this.rep.find();
    }

    async getSeller(_id:number): Promise<SellerEntity[]> {
        return await this.rep.findByIds([
            _id
        ])
    }
    
    async createSeller(seller: SellerEntity) {
        await this.rep.insert(seller);
    }
    
    async updateSeller(seller: SellerEntity) {
        await this.rep.update({ id_comp:seller.id_comp }, seller);
    }

    async deleteSeller(seller: SellerEntity){
        await this.rep.delete(seller);
    }
}
