import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BackgroundTrait, CharacterTrait, ClassTrait } from './traits.entity';

@Entity()
export class CharacterClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hitDice: string;

  @Column()
  primaryAbility: string;

  @Column()
  savingThrows: string;

  @OneToMany(() => ClassTrait, (trait) => trait.character_class)
  traits: ClassTrait[];
}
