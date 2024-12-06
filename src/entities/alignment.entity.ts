import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from './character.entity';

@Entity()
export class Alignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Character, (character) => character.alignment)
  characters: Character[];
}