import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private mainPlayer: Fighter,
    private monsters: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(mainPlayer);
  }

  private static isAlive(char: Monster | Fighter | SimpleFighter): boolean {
    return char.lifePoints > 0;
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      while (PVE.isAlive(this.mainPlayer) && PVE.isAlive(monster)) {
        this.mainPlayer.attack(monster);
        monster.attack(this.mainPlayer);
      }
      if (!PVE.isAlive(this.mainPlayer)) return super.fight();
    });
    return super.fight();
  }
}