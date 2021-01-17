import {BaseEntity} from "./base-entity.interface";
import {Driver} from "./driver.interface";
import {Constructor} from "./constructor.interface";

export interface Race extends BaseEntity {
  date: string;
  poleDriver: Driver;
  winDriver: Driver;
  winConstructor: Constructor
}
