import { ReadJsonInterface } from "../interfaces/readJSON.interface";

export class ReadJson implements ReadJsonInterface {
  readJson(): void {
    console.log("Reading JSON...");
  }
  updateJson(): string {
    return "JSON updated";
  }
}
