import { Enemy } from "../enemy.interface";

export class Ninja implements Enemy {
  attack(): string {
    return "Attack Ninja -5 HP and Poisoned";
  }
}
