import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf._instancesCount += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._instancesCount;
  }
}