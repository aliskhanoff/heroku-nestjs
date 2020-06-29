import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name', type: 'character varying', length: 32 })
    firstName: string;

    @Column({ unique: true, name: 'email', type: 'character varying', length: 32 })
    email: string;

    @Column({ name: 'last_name', type: 'character varying', length: 32 })
    lastName: string;

    @Column({  name: 'password', type: 'character varying', length: 64 })
    password: string;
}

export default User;