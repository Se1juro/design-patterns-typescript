import { ReadJsonInterface } from "./readJSON.interface";

export class ReadJson implements ReadJsonInterface {
  readJson(): void {
    console.log("Reading JSON...");
  }
  updateJson(): string {
    return "JSON updated";
  }
}
