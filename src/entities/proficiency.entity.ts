import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proficiency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;
}
