import Battle from './Battle';
import SimpleFighter from '../Fighter/SimpleFighter';
import Fighter from '../Fighter';

export default class PVE extends Battle {
  constructor(
    protected player1: Fighter,
    protected players2: Fighter[] | SimpleFighter[],
    
  ) {    
    super(player1);
  }
  
  fight(): number {
    this.players2.forEach((player) => player.attack(this.player1));
    if (this.player1.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}