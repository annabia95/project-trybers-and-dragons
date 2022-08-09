import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _counterInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._counterInstances += 1;
    return this._counterInstances;
  }
}