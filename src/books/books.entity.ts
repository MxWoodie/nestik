import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  description: string;
}
