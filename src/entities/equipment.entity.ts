import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Background } from './background.entity';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @ManyToMany(() => Background, (background) => background.equipments)
  backgrounds: Background[];
}