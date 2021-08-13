import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id_user:number;

    @Column({ length: 50 })
    user_name: string;

    @Column({ length: 50 })
    user_las: string;

    @Column({ length: 200 })
    avatar: string;

}
