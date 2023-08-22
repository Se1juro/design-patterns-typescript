import { ReadJson } from "./implementations/readJSON.implementation";
import { ReadXML } from "./implementations/readXML.implementation";

export class AdapterXMLToJson implements ReadJson {
  constructor(private readXMLimp: ReadXML) {}

  readJson(): void {
    this.readXMLimp.readXML();
  }
  updateJson(): string {
    return this.readXMLimp.updateXML();
  }
}
