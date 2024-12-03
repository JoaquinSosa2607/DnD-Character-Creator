import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

}