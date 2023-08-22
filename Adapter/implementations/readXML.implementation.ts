import { ReadXMLInterface } from "../interfaces/readXML.interface";

export class ReadXML implements ReadXMLInterface {
  readXML(): void {
    console.log("READING XML...");
  }
  updateXML(): string {
    return "XML Updated";
  }
}
