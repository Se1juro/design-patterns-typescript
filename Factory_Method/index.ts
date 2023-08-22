import { EnemyType } from "./enemyType.type";
import { TypeEnemies } from "./typeEnemies.constant";

function initGame(enemy: EnemyType) {
  const testNinja = new TypeEnemies[enemy]();
  testNinja.attack();
}

initGame("ninja");
initGame("samurai");
