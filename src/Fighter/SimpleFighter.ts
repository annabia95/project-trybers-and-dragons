export default interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter): void,
  receiveDamage(attackPoint: number): number,
}