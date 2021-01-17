import {Constructor} from "./constructor.interface";
import {BaseEntity} from "./base-entity.interface";

export interface Driver extends BaseEntity {
  code: string;
  name: string;
  surname: string;
  nationality: string;
  team: Constructor;
  raceSeasonWin: number;
  poleSeason: number;
}
