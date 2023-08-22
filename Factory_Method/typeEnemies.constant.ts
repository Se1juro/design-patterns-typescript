import { ConcreteCreatorNinja } from "./factories/ninja.creator";
import { ConcreteCreatorSamurai } from "./factories/samurai.creator";

export const TypeEnemies = {
  ninja: ConcreteCreatorNinja,
  samurai: ConcreteCreatorSamurai,
};
