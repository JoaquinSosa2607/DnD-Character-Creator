import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}