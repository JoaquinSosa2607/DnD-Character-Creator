import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Character } from './character.entity';
import { PersonalityTraits } from './personalityTraits.entity';
import { Ideals } from './ideals.entity';
import { Bonds } from './bonds.entity';
import { Flaws } from './flaws.entity';
import { Skill } from './skill.entity';
import { Equipment } from './equipment.entity';
import { Proficiency } from './proficiency.entity';
import { BackgroundTrait } from './traits.entity';

@Entity()
export class Background {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  features: string;

  @OneToMany(() => PersonalityTraits, (trait) => trait.background)
  personalityTraits: PersonalityTraits[];

  @OneToMany(() => Ideals, (ideal) => ideal.background)
  ideals: Ideals[];

  @OneToMany(() => Bonds, (bond) => bond.background)
  bonds: Bonds[];

  @OneToMany(() => Flaws, (flaw) => flaw.background)
  flaws: Flaws[];

  @ManyToMany(() => Skill, (skill) => skill.backgrounds)
  @JoinTable({ name: 'skill_background' })
  skills: Skill[];

  @ManyToMany(() => Equipment, (equipment) => equipment.backgrounds)
  @JoinTable({ name: 'equipment_background' })
  equipments: Equipment[];

  @ManyToMany(() => Proficiency, (proficiency) => proficiency.backgrounds)
  @JoinTable({ name: 'proficiency_background' })
  proficiencies: Proficiency[];

  @OneToMany(() => Character, (character) => character.background)
  characters: Character[];

  @OneToMany(() => BackgroundTrait, (trait) => trait.background)
  traits: BackgroundTrait[];
}