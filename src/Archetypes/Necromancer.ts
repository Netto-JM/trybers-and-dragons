import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  protected _energyType: EnergyType;
  private static _instancesCount = 0;

  constructor(protected _name: string) {
    super(_name);
    this._energyType = 'mana';
    Necromancer._instancesCount += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instancesCount;
  }
}