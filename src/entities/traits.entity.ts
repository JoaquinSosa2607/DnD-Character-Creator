import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Character } from './character.entity';
import { CharacterClass } from './characterClass.entity';
import { Background } from './background.entity';

export abstract class Traits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}

@Entity()
export class CharacterTrait extends Traits {
  @ManyToOne(() => Character, (character) => character.traits)
  @JoinColumn({ name: 'character_id' })
  character: Character;
}

@Entity()
export class ClassTrait extends Traits {
    @ManyToOne(() => CharacterClass, (char_class) => char_class.traits)
    @JoinColumn({ name: 'class_id' })
    character_class: CharacterClass;
}

@Entity()
export class BackgroundTrait extends Traits {
    @ManyToOne(() => Background, (background) => background.traits)
    @JoinColumn({ name: 'background_d' })
    background: Background;
}
