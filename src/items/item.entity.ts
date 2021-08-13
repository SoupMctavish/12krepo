import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
export class ItemEntity {

    @PrimaryGeneratedColumn()
    id_game: number;

    @Column({ length: 50 })
    g_name: string;

    @Column({ length: 50 })
    g_description: string;

    @Column({ length: 50 })
    g_price: string;

    @Column({ length: 200 })
    g_logo: string;

}
