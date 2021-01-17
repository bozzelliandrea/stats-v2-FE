import {Constructor} from "./constructor.interface";
import {BaseEntity} from "./base-entity.interface";

export interface Driver extends BaseEntity {
  code: string;
  number: number;
  surname: string;
  nationality: string;
  team: Constructor;
  raceSeasonWin: number;
  poleSeason: number;
  helmetUrl: string;
  flagUrl: string;
  imageUrl: string;
}
