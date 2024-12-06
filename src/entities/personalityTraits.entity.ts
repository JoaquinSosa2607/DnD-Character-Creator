import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Background } from './background.entity';

@Entity()
export class PersonalityTraits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => Background, (background) => background.personalityTraits)
  @JoinColumn({ name: 'background_id' })
  background: Background;
}