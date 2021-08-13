import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sellers')
export class SellerEntity {

    @PrimaryGeneratedColumn()
    id_comp:number;

    @Column({ length: 50 })
    comp_name: string;

    @Column({ length: 200 })
    icon: string;

}
