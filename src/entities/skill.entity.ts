import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Background } from './background.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  relatedAbility: string;

  @Column()
  proficiencyBonus: string;

  @ManyToMany(() => Background, (background) => background.proficiencies)
  backgrounds: Background[];
}