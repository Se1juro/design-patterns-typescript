import { Samurai } from "../enemies/samurai";
import { EnemyFactory } from "../enemy.factory";
import { Enemy } from "../enemy.interface";

export class ConcreteCreatorSamurai extends EnemyFactory {
  public createEnemy(): Enemy {
    return new Samurai();
  }
}
