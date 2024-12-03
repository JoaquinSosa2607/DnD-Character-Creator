import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_USER, MYSQL_PASSW } from "./env";
import { AbilityScores } from './entities/abilityScores.entity';
import { Alignment } from './entities/alignment.entity';
import { Background } from './entities/background.entity';
import { Character } from './entities/character.entity';
import { CharacterClass } from './entities/characterClass.entity';
import { Equipment } from './entities/equipment.entity';
import { Proficiency } from './entities/proficiency.entity';
import { Species } from './entities/species.entity';
import { Spell } from './entities/spell.entity';
import { Traits } from './entities/traits.entity';
import { Skill } from './entities/skill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: 3306,
      username: DB_USER,
      password: MYSQL_PASSW,
      database: DB_NAME,
      entities: [AbilityScores, Alignment, Background, Character, CharacterClass, Equipment, Proficiency, Skill, Species, Spell, Traits],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
