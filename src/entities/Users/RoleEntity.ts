import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'roles'})
export class RoleEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string
}

export default RoleEntity;