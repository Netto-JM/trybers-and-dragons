export default abstract class Race {
  constructor(protected _name: string, protected _dexterity: number) {}

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}