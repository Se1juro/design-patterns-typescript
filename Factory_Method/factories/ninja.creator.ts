import { Ninja } from "../enemies/ninja";
import { EnemyFactory } from "../enemy.factory";
import { Enemy } from "../enemy.interface";

export class ConcreteCreatorNinja extends EnemyFactory {
  public createEnemy(): Enemy {
    return new Ninja();
  }
}
