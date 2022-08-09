import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  static _counterInstances = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances(): number {
    this._counterInstances += 1;
    return this._counterInstances;
  }
}