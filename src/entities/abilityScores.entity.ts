import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from './character.entity';

@Entity()
export class AbilityScores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  strength: number;

  @Column()
  dexterity: number;

  @Column()
  constitution: string;

  @Column()
  intelligence: number;

  @Column()
  wisdom: number;

  @Column()
  charisma: number;

  @OneToOne(() => Character, (character) => character.abilityScore)
  @JoinColumn({ name: 'character_id' })
  character: Character;
}