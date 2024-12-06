import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Species {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  speed: string;

  @Column()
  size: string;
}