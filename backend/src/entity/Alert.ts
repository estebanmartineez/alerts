import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'

@Entity()
export class Alert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    server: string;

    @Column()
    description: string;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: string;

    @Column()
    server_type: string;
}