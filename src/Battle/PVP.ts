import Battle from './Battle';
import Fighter from '../Fighter';
import Character from '../Character';

export default class PVP extends Battle {
  constructor(
    protected player1: Fighter | Character,
    protected player2: Fighter | Character,
    
  ) {    
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return this.player1.lifePoints > 0 ? 1 : -1;
  }
}
