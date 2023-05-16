import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private playerOne: Fighter, private playerTwo: Fighter) {
    super(playerOne);
  }

  fight(): number {
    while (this.playerOne.lifePoints > 0 && this.playerTwo.lifePoints > 0) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
    }
    return super.fight();
  }
}