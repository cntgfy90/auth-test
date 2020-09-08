import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUser } from './types';

@Entity({ name: 'Users' })
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'citext',
        nullable: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: 'text',
        nullable: false,
    })
    password!: string;
}
