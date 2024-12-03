import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AbilityScores } from './abilityScores.entity';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @OneToOne(() => AbilityScores, (abilityScore) => abilityScore.character)
  abilityScore: AbilityScores;
}