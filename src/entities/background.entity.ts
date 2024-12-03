import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Background {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  features: string;
}