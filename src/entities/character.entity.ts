import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AbilityScores } from './abilityScores.entity';
import { Alignment } from './alignment.entity';
import { Background } from './background.entity';
import { BackgroundTrait, CharacterTrait } from './traits.entity';

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

  @ManyToOne(() => Alignment, (alignment) => alignment.characters)
  @JoinColumn({ name: "alignment_id" })
  alignment: Alignment;

  @ManyToOne(() => Background, (background) => background.characters)
  @JoinColumn({ name: "background_id" })
  background: Background;

  @OneToMany(() => CharacterTrait, (trait) => trait.character)
  traits: CharacterTrait[];

}