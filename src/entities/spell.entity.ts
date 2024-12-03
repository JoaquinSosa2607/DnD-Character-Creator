import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  school: string;

  @Column()
  castingTime: string;

  @Column()
  range: string;

  @Column()
  components: string;

  @Column()
  duration: string;
}