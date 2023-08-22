import { Enemy } from "./enemy.interface";

export abstract class EnemyFactory {
  public abstract createEnemy(): Enemy;

  public attack() {
    const enemy = this.createEnemy();
    console.log("Factoria ataque:", enemy.attack());
  }
}
