import { Enemy } from "../enemy.interface";

export class Samurai implements Enemy {
  attack(): string {
    return "Attack samurai -10 HP";
  }
}
