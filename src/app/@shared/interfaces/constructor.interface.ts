import {BaseEntity} from "./base-entity.interface";
import {Driver} from "./driver.interface";

export interface Constructor extends BaseEntity {
  nationality: string;
  firstDriver: Driver;
  secondDriver: Driver;
  raceSeasonWin: number;
}
