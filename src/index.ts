import Character from './Character';
import Monster from './Monster';
import Fighter from './Fighter';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

const player1: Fighter = new Character('Du');
const player2: Fighter = new Character('Dudu');
const player3: Fighter = new Character('Edu');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1: Monster = new Monster();
const monster2: Monster = new Dragon();

const pvp: PVP = new PVP(player2, player3);
const pve: PVE = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle: Battle): void => { battle.fight(); });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };